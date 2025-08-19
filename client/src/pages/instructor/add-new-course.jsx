import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
  createVideoService,
  createQuizService,
  createResourceService,
  createAssessmentService,
  createModuleService,
} from "@/services";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { useRef } from "react";

function AddNewCoursePage() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
    assessment,
    assessmentMeta,
  } = useContext(InstructorContext);

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  // Initialize edit mode if courseId param is present
  useEffect(() => {
    if (params?.courseId) {
      setCurrentEditedCourseId(params.courseId);
    }
  }, [params.courseId, setCurrentEditedCourseId]);

  // Fetch course details when editing
  useEffect(() => {
    if (currentEditedCourseId !== null) {
      fetchCurrentCourseDetails();
    }
  }, [currentEditedCourseId]);

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return value === "" || value === null || value === undefined;
  }

  // Improved validation: all landing fields filled + at least one module with at least one video (with title & videoUrl)
  function validateFormData() {
    // Validate landing page fields
    const landingInvalid = Object.values(courseLandingFormData).some(isEmpty);
    if (landingInvalid) return false;

    // At least one module with at least one video
    if (!Array.isArray(courseCurriculumFormData) || courseCurriculumFormData.length === 0) return false;
    let hasValidVideo = false;
    for (const module of courseCurriculumFormData) {
      if (!Array.isArray(module.items) || module.items.length === 0) continue;
      for (const item of module.items) {
        if (item.type === 'video' && !isEmpty(item.title) && !isEmpty(item.videoUrl)) {
          hasValidVideo = true;
          break;
        }
      }
      if (hasValidVideo) break;
    }
    if (!hasValidVideo) return false;
    return true;
  }


  async function handleCreateCourse() {
    try {
      // 1. For each module, create videos, quizzes, resources, assessments, then the module
      const moduleIds = [];
      for (const module of courseCurriculumFormData) {
        const videoIds = [];
        const quizIds = [];
        const resourceIds = [];
        const assessmentIds = [];
        if (Array.isArray(module.items)) {
          for (const item of module.items) {
            if (item.type === 'video') {
              const res = await createVideoService({
                title: item.title,
                videoUrl: item.videoUrl,
                description: item.description,
                freePreview: item.freePreview,
                public_id: item.public_id,
              });
              if (res.success && res.data && res.data._id) videoIds.push(res.data._id);
            } else if (item.type === 'quiz') {
              const res = await createQuizService({
                question: item.question,
                options: item.options,
                correct: item.correct,
              });
              if (res.success && res.data && res.data._id) quizIds.push(res.data._id);
            } else if (item.type === 'resource') {
              const res = await createResourceService({
                title: item.title,
                resourceUrl: item.resourceUrl,
              });
              if (res.success && res.data && res.data._id) resourceIds.push(res.data._id);
            }
          }
        }
        // Assessments per module (if any)
        // (If you want only one assessment per course, skip this and handle below)
        // Create the module
        const modRes = await createModuleService({
          name: module.name,
          videos: videoIds,
          quizzes: quizIds,
          resources: resourceIds,
          assessments: [], // will be filled below if global assessment
        });
        if (modRes.success && modRes.data && modRes.data._id) moduleIds.push(modRes.data._id);
      }

      // 2. If assessment is global (not per module), create it and add to a module or as a separate module
      if (assessment && assessment.questions && assessment.questions.length > 0) {
        const assessRes = await createAssessmentService({
          title: assessmentMeta?.title || '',
          description: assessmentMeta?.description || '',
          instructions: assessmentMeta?.instructions || '',
          passPercent: assessmentMeta?.passPercent || 60,
          questions: assessment.questions,
        });
        if (assessRes.success && assessRes.data && assessRes.data._id) {
          // Option 1: Add as a new module
          const assessModuleRes = await createModuleService({
            name: assessmentMeta?.title || 'Assessment',
            videos: [],
            quizzes: [],
            resources: [],
            assessments: [assessRes.data._id],
          });
          if (assessModuleRes.success && assessModuleRes.data && assessModuleRes.data._id) {
            moduleIds.push(assessModuleRes.data._id);
          }
        }
      }

      // 3. Create the course with module IDs as curriculum
      const courseFinalFormData = {
        instructorId: auth?.user?._id,
        instructorName: auth?.user?.userName,
        date: new Date().toISOString(),
        ...courseLandingFormData,
        students: [],
        curriculum: moduleIds,
        isPublished: true,
      };

      const response = currentEditedCourseId
        ? await updateCourseByIdService(
            currentEditedCourseId,
            courseFinalFormData
          )
        : await addNewCourseService(courseFinalFormData);

      if (response?.success) {
        setCourseLandingFormData(courseLandingInitialFormData);
        setCourseCurriculumFormData(courseCurriculumInitialFormData);
        setCurrentEditedCourseId(null);
        navigate(-1);
      } else {
        console.error("Course creation failed:", response?.message);
      }
    } catch (err) {
      console.error("Error in handleCreateCourse:", err);
    }
  }

  async function fetchCurrentCourseDetails() {
    try {
      const response = await fetchInstructorCourseDetailsService(
        currentEditedCourseId
      );
      console.log("Fetched course details:", response);

      if (response?.success) {
        // Merge API data into initial form data shape
        const initial = courseLandingInitialFormData;
        const setCourseFormData = Object.keys(initial).reduce((acc, key) => {
          acc[key] = response.data[key] ?? initial[key];
          return acc;
        }, {});

        setCourseLandingFormData(setCourseFormData);
        setCourseCurriculumFormData(
          response.data.curriculum || initial.curriculum
        );
      }
    } catch (err) {
      console.error("Error fetching course details:", err);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-extrabold">
          {currentEditedCourseId ? "Edit Course" : "Create a New Course"}
        </h1>
        <Button
          disabled={!validateFormData()}
          className="text-sm tracking-wider font-bold px-8"
          onClick={handleCreateCourse}
        >
          {currentEditedCourseId ? "UPDATE" : "SUBMIT"}
        </Button>
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="curriculum" className="space-y-4">
            <TabsList>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="course-landing-page">
                Course Landing Page
              </TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <CourseCurriculum
                curriculum={courseCurriculumFormData}
                setCurriculum={setCourseCurriculumFormData}
              />
            </TabsContent>

            <TabsContent value="course-landing-page">
              <CourseLanding />
            </TabsContent>

            <TabsContent value="settings">
              <CourseSettings />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddNewCoursePage;
