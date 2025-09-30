import { courseCategories } from "@/config";
import { useContext, useEffect } from "react";
import { StudentContext } from "@/context/student-context";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/student-view/footer";
import FeaturedCourses from "@/components/student-view/home/featured-courses";
import StatsHighlights from "@/components/student-view/home/stats-highlights";
import BecomeInstructor from "@/components/student-view/home/become-instructor";
import TestimonialSection from "@/components/student-view/home/testimonial-section";
import JobGuaranteedCourses from "@/components/student-view/home/job-guaranteed-courses";
import TrendingCourses from "@/components/student-view/home/trending-courses";
// import CourseCategories from "@/components/student-view/home/coursecategories";
import HeroSection from "@/components/student-view/home/hero-section";

import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    sessionStorage.removeItem("filters");
    const currentFilter = { category: [getCurrentId] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    try {
      const response = await fetchStudentViewCourseListService();
      if (response?.success) {
        setStudentViewCoursesList(response?.data);
      } else {
        console.error("Failed to fetch courses:", response?.message);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    try {
      const response = await checkCoursePurchaseInfoService(getCurrentCourseId);
      if (response?.success) {
        navigate(
          response?.data
            ? `/course-progress/${getCurrentCourseId}`
            : `/course/details/${getCurrentCourseId}`
        );
      } else {
        alert("Unable to navigate to the course. Please try again.");
      }
    } catch (error) {
      console.error("Error navigating to the course:", error);
      alert("An error occurred while checking course access.");
    }
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <HeroSection />
      <StatsHighlights />

      {/* Everything You Need to Succeed Section */}
      <section 
        className="relative mx-auto my-8 md:my-16" 
        style={{ 
          maxWidth: '1333px',
          background: '#7B6BA8',
          borderRadius: '20px'
        }}
      >
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 
              className="text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                textAlign: 'center'
              }}
            >
              Everything You Need to Succeed
            </h2>
            <p 
              className="text-white mx-auto text-sm sm:text-base md:text-lg max-w-xs sm:max-w-2xl md:max-w-4xl" 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                textAlign: 'center',
                opacity: 0.9
              }}
            >
              Our comprehensive learning platform provides all the tools and resources you need to master new skills and advance your career.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {/* HD Video Lessons */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>HD Video Lessons</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  High-quality video content with crystal clear audio and professional production.
                </p>
              </div>

              {/* Expert Instructors */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Expert Instructors</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Learn from industry professionals with years of real-world experience.
                </p>
              </div>

              {/* Flexible Schedule */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Flexible Schedule</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Learn at your own pace with 24/7 access to all course materials.
                </p>
              </div>

              {/* Certificates */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Certificates</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Earn verified certificates upon completion to showcase your achievements.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {/* Rich Content */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Rich Content</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Interactive assignments, quizzes, and downloadable resources included.
                </p>
              </div>

              {/* Mobile Learning */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Mobile Learning</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Access courses on any device with our responsive design and mobile app.
                </p>
              </div>

              {/* Community Support */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Community Support</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Connect with fellow learners and get help from our active community.
                </p>
              </div>

              {/* Progress Tracking */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px] md:min-h-[180px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-base md:text-lg lg:text-xl font-bold" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal'
                }}>Progress Tracking</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400
                }}>
                  Monitor your learning progress with detailed analytics and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold leading-[39px] text-[#453E75] mb-3" style={{ fontFamily: 'Inter' }}>
              Browse All Categories
            </h2>
            <p className="text-[16px] leading-[19px] text-black tracking-[-0.02em]" style={{ fontFamily: 'Inter' }}>
              Explore trending topics and find your next skill to master.
            </p>
          </div>

          {/* Dynamic Categories Layout */}
          <div className="flex flex-wrap justify-center gap-3">
            {courseCategories.map((categoryItem, index) => (
              <button
                key={categoryItem.id}
                onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
                className="bg-[#E8E0F5] text-[#3A3838] px-6 py-2 rounded-[33px] text-[12px] leading-[15px] font-normal hover:bg-[#DDD1F0] transition-colors duration-200"
                style={{ 
                  fontFamily: 'Inter', 
                  height: '35px',
                  minWidth: 'fit-content'
                }}
              >
                {categoryItem.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Guaranteed Courses */}
      <JobGuaranteedCourses />
      
      {/* Trending Courses */}
      <TrendingCourses />

      {/* Featured Courses */}
      <FeaturedCourses />
      <BecomeInstructor />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default StudentHomePage;
