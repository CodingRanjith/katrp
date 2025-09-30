import React from "react";
import { Star, Clock, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Add scrollbar hiding styles
const scrollbarHideStyle = {
  scrollbarWidth: 'none', /* Firefox */
  msOverflowStyle: 'none', /* Internet Explorer 10+ */
};

const jobGuaranteedCourses = [
  {
    id: 1,
    title: "Web Development For Beginners",
    subtitle: "Learn to build responsive websites from scratch using HTML, CSS, and JavaScript.",
    category: "Development",
    price: "₹599",
    originalPrice: "₹1,999",
    instructor: {
      name: "Gareth Johnson",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.8,
    reviews: "(45,234)",
    image: "/api/placeholder/300/180",
    duration: "19h 21m",
    lectures: "95",
    videos: "22",
    level: "Beginner"
  },
  {
    id: 2,
    title: "UI/UX Designer Masterclass 2025",
    subtitle: "Learn User Research, Wireframing, Prototyping, and Visual Design. Become a top-tier designer.",
    category: "Design",
    price: "₹699",
    originalPrice: "₹1,999",
    instructor: {
      name: "Emma",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.7,
    reviews: "(34,297)",
    image: "/api/placeholder/300/180",
    duration: "12h 20m",
    lectures: "14",
    videos: "52,346",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "HTML - The Complete Guide 2025",
    subtitle: "Build real-world, responsive websites and web applications using HTML5.",
    category: "Development",
    price: "₹599",
    originalPrice: "₹1,999",
    instructor: {
      name: "Lara",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.9,
    reviews: "(14,197)",
    image: "/api/placeholder/300/180",
    duration: "16h 12m",
    lectures: "16",
    videos: "8,214",
    level: "Beginner"
  },
  {
    id: 4,
    title: "Business Analytics Masterclass",
    subtitle: "From Data to Insights: Everything you need to become a data analyst.",
    category: "Development",
    price: "₹799",
    originalPrice: "₹1,999",
    instructor: {
      name: "AJ",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.8,
    reviews: "(9,562)",
    image: "/api/placeholder/300/180",
    duration: "22h 15m",
    lectures: "12",
    videos: "7,843",
    level: "Advanced"
  }
];

const JobGuaranteedCourses = () => {
  return (
    <section 
      className="relative py-16 px-4 lg:px-8 xl:px-16"
      style={{
        background: '#FFFFFF',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-8 px-4">
          <div 
            className="text-gray-700 font-medium text-sm mb-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#6B7280'
            }}
          >
            Job Guaranteed Courses
          </div>
          <h2 
            className="text-gray-900 mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 32px)',
              lineHeight: '1.2',
              color: '#111827'
            }}
          >
            Secure your future with 100% placement-focused training.
          </h2>
        </div>

        {/* Course Cards */}
        <div className="relative px-4">
          <div 
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth" 
            style={{
              ...scrollbarHideStyle,
              WebkitScrollbar: { display: 'none' }, /* Safari and Chrome */
              scrollSnapType: 'x mandatory'
            }}
          >
            {jobGuaranteedCourses.map((course) => (
              <div
                key={course.id}
                className="flex-none w-[300px] sm:w-[320px] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  scrollSnapAlign: 'start'
                }}
              >
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[180px] object-cover"
                    style={{ backgroundColor: '#f8fafc' }}
                  />
                  <div className="absolute top-3 left-3">
                    <span 
                      className="text-white px-3 py-1 rounded text-xs font-medium"
                      style={{
                        background: '#10B981',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 500
                      }}
                    >
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span 
                      className="font-bold text-gray-900"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: '#111827'
                      }}
                    >
                      {course.price}
                    </span>
                    <span 
                      className="text-gray-400 line-through"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        color: '#9CA3AF'
                      }}
                    >
                      {course.originalPrice}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-bold text-gray-900 mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#111827'
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Subtitle */}
                  <p 
                    className="text-gray-600 mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      lineHeight: '15px',
                      color: '#6B7280'
                    }}
                  >
                    {course.subtitle}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2"
                      style={{ background: '#EF4444' }}
                    >
                      <span 
                        className="text-white text-xs font-bold"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#FFFFFF'
                        }}
                      >
                        {course.instructor.name.charAt(0)}
                      </span>
                    </div>
                    <span 
                      className="text-gray-700 font-medium"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#374151'
                      }}
                    >
                      {course.instructor.name}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span 
                      className="font-bold text-gray-900 mr-1"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#111827'
                      }}
                    >
                      {course.rating}
                    </span>
                    <span 
                      className="text-gray-500"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        color: '#6B7280'
                      }}
                    >
                      {course.reviews}
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div 
                    className="flex items-center justify-between text-gray-600 border-t border-gray-100 pt-3"
                    style={{ borderTop: '1px solid #F3F4F6' }}
                  >
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-gray-400" />
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          color: '#6B7280'
                        }}
                      >
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1 text-gray-400" />
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          color: '#6B7280'
                        }}
                      >
                        {course.lectures}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Play className="w-3 h-3 mr-1 text-gray-400" />
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          color: '#6B7280'
                        }}
                      >
                        {course.videos}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button 
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 z-10 hidden lg:flex items-center justify-center"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              width: '40px',
              height: '40px'
            }}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobGuaranteedCourses;
