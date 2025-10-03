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
import UnlockJourney from "@/components/student-view/home/unlock-journey";
// import CourseCategories from "@/components/student-view/home/coursecategories";
import HeroSection from "@/components/student-view/home/hero-section";
import professionalTeamMeeting from "@/assets/img/hero-kat.jpg";

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
       {/* Job Guaranteed Courses */}
      <JobGuaranteedCourses />
      {/* Trending Courses */}
      <TrendingCourses />
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

     
      
      

      {/* Featured Courses */}
      <FeaturedCourses />
      
      {/* Unlock Your Kattraan Journey Section */}
      <UnlockJourney />
      
      {/* What Our Students Say Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-[#F6F5F8]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#453E75] mb-3 md:mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              What Our Students Say
            </h2>
            <p 
              className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Join thousands of successful learners who have transformed their careers with our courses.
            </p>
          </div>

          {/* Testimonials Grid - Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Testimonial 1 - James Wilson */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-auto">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="text-3xl md:text-4xl text-gray-400 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p 
                className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "Outstanding courses with practical applications. The instructor feedback was invaluable, and the networking opportunities with other students led to new business partnerships. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  JW
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>James Wilson</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Maria Garcia */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-auto">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="text-3xl md:text-4xl text-gray-400 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p 
                className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "Kattraan truly transformed my career journey. With its personalized learning path, I was able to identify my strengths and bridge my skill gaps seamlessly. The hands-on training and real-world projects gave me the confidence to step into a completely new domain."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  MG
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Maria Garcia</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - David Kim */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-auto">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="text-3xl md:text-4xl text-gray-400 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p 
                className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "The digital marketing course exceeded my expectations. Real-world case studies, actionable strategies, and ongoing mentor support helped me increase our conversion rates by 40% in just two months."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  DK
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>David Kim</span>
                </div>
              </div>
            </div>

            {/* Testimonial 4 - Sophie Chen */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-auto">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="text-3xl md:text-4xl text-gray-400 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p 
                className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "The flexible schedule was perfect for my lifestyle. I could learn at my own pace while working full-time. The quality of content and live certification helped me start my successful freelancing career."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  SC
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Sophie Chen</span>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Alex Thompson */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-auto">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="text-3xl md:text-4xl text-gray-400 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p 
                className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "Urban Code completely transformed my career. With a personalized learning path and mentor support, I transitioned from marketing to software engineering in just 8 months. The hands-on projects and structured roadmap gave me confidence and clarity. Today, I stand empowered with skills that opened doors to exciting opportunities in tech."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  AT
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Alex Thompson</span>
                </div>
              </div>
            </div>

            {/* Testimonial 6 - Lisa Rodriguez */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-auto">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="text-3xl md:text-4xl text-gray-400 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p 
                className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "The Data Science track was incredibly comprehensive, covering everything from the foundational basics to advanced machine learning concepts. Each module was explained in a clear, structured, and practical manner, making even complex topics easy to grasp."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  LR
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Lisa Rodriguez</span>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button 
              className="bg-[#453E75] hover:bg-[#3A3464] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View more
            </button>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-8 md:py-12 lg:py-16 px-4 bg-[#F6F5F8]">
        <div className="flex justify-center items-center">
          <div 
            className="relative bg-gradient-to-b from-[#7B6BA8] to-[#453E75] rounded-[16px] md:rounded-[20px] lg:rounded-[26px] p-4 md:p-6 lg:p-8 text-center max-w-[841px] w-full mx-2 md:mx-4 min-h-[120px] md:min-h-[140px] lg:h-[151px]"
            style={{
              boxShadow: '0px 0px 6.2px 2px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h2 
              className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-tight mb-2 md:mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Stay Updated
            </h2>
            <p 
              className="text-white text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-relaxed mb-3 md:mb-4 opacity-90 max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get the latest courses, tips, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 md:px-4 py-2 rounded-[6px] md:rounded-[8px] border-0 outline-none text-gray-800 placeholder-gray-500 text-[12px] md:text-[13px] lg:text-[14px] font-normal focus:ring-2 focus:ring-white focus:ring-opacity-50"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  height: '32px',
                  '@media (min-width: 768px)': {
                    height: '36px'
                  }
                }}
              />
              <button 
                className="bg-[#453E75] hover:bg-[#3A3464] text-white px-4 md:px-6 py-2 rounded-[6px] md:rounded-[8px] font-medium transition-colors duration-300 whitespace-nowrap text-[12px] md:text-[13px] lg:text-[14px] min-w-[80px] md:min-w-[100px] h-[32px] md:h-[36px] flex items-center justify-center"
                style={{ 
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default StudentHomePage;
