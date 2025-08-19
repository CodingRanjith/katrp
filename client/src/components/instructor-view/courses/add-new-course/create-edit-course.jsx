import React, { useState, useEffect, useContext } from "react";
import CourseLanding from "./course-landing";
import CourseSettings from "./course-settings";
import CourseCurriculum from "./course-curriculum";
import { addNewCourseService, updateCourseByIdService, fetchInstructorCourseDetailsService } from "@/services";
import { InstructorContext } from "@/context/instructor-context";
import { useNavigate, useParams } from "react-router-dom";

function CreateEditCourse() {
  const navigate = useNavigate();
  const { id } = useParams(); // If editing, id will be present
  const isEdit = Boolean(id);

  // Context for landing/settings forms
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    courseCurriculumFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load course if editing
  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      fetchInstructorCourseDetailsService(id)
        .then(res => {
          if (res.success) {
            setCourseLandingFormData({ ...res.data });
            setCourseCurriculumFormData(res.data.curriculum || []);
          } else {
            setError(res.message || "Failed to load course");
          }
        })
        .catch(() => setError("Failed to load course"))
        .finally(() => setLoading(false));
    }
  }, [id, isEdit, setCourseLandingFormData, setCourseCurriculumFormData]);

  // Save or update course
  const handleSave = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const courseData = {
        ...courseLandingFormData,
        curriculum: courseCurriculumFormData,
      };
      let res;
      if (isEdit) {
        res = await updateCourseByIdService(id, courseData);
      } else {
        res = await addNewCourseService(courseData);
      }
      if (res.success) {
        setSuccess("Course saved successfully!");
        setTimeout(() => navigate("/instructor/courses"), 1200);
      } else {
        setError(res.message || "Failed to save course");
      }
    } catch (e) {
      setError("Failed to save course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-10">
      <CourseLanding />
      <CourseSettings />
      <CourseCurriculum
        curriculum={courseCurriculumFormData}
        setCurriculum={setCourseCurriculumFormData}
      />
      <div className="flex justify-end gap-4 pt-6">
        <button
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-purple-700 transition disabled:opacity-60"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? "Saving..." : isEdit ? "Update Course" : "Save Course"}
        </button>
        {error && <span className="text-red-500 font-semibold ml-4">{error}</span>}
        {success && <span className="text-green-600 font-semibold ml-4">{success}</span>}
      </div>
    </div>
  );
}

export default CreateEditCourse;
