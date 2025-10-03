import React, { useRef } from "react";
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
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24; // card width + gap (px)
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative py-8 md:py-12 lg:py-16 px-4 lg:px-8 xl:px-16"
      style={{
        background: '#FFFFFF',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        borderRadius: '24px',
        border: 'none',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - Responsive */}
        <div className="text-left mb-6 md:mb-8 px-2 md:px-4">
          <div
            className="mb-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#453E75',
              letterSpacing: '-0.01em',
            }}
          >
            Job Guaranteed Courses
          </div>
          <div
            className="mb-4 md:mb-6 text-sm md:text-base lg:text-lg"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '1.2',
              color: '#000',
              letterSpacing: '-0.01em',
            }}
          >
            Secure your future with 100% placement-focused training.
          </div>
        </div>

        {/* Course Cards - Responsive Grid and Scroll */}
        <div className="relative">
          {/* Desktop Horizontal Scroll */}
          <div className="hidden lg:block px-4">
            <div 
              ref={scrollRef}
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
                  className="group flex-none w-[320px] bg-white hover:bg-gradient-to-br hover:from-[#B8A9DB] hover:to-[#9B89C7] shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:border-white border-2 border-[#B5B5C3]"
                  style={{
                    borderRadius: '14px',
                    scrollSnapAlign: 'start',
                    minHeight: '448px',
                    boxSizing: 'border-box'
                  }}
                >
                  {/* Course Image */}
                  <div className="relative group-hover:bg-transparent transition-all duration-700 rounded-t-[12px] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-[180px] object-cover group-hover:opacity-100 group-hover:brightness-105 transition-all duration-700"
                      style={{ backgroundColor: '#f8fafc', borderRadius: '11px', marginTop: 16, marginLeft: 16, marginRight: 16, width: 'calc(100% - 32px)' }}
                    />
                    <div className="absolute top-[196px] left-6">
                      <span
                        className="px-4 py-1 rounded-full text-xs font-medium group-hover:bg-white group-hover:text-[#9B89C7] group-hover:shadow-lg transition-all duration-500"
                        style={{
                          background: '#E8E0F5',
                          color: '#161439',
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '13px',
                          borderRadius: '31px',
                          minWidth: '82px',
                          display: 'inline-block',
                          textAlign: 'center',
                        }}
                      >
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-4 group-hover:bg-transparent transition-all duration-700">
                    {/* Price */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginBottom: 8 }}>
                      <span
                        className="transition-colors duration-500 font-bold"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '18px',
                          color: '#453E75',
                          lineHeight: '32px',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                      >
                        {course.price}
                      </span>
                      <span
                        className="transition-colors duration-500"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '13px',
                          color: '#7F7E97',
                          textDecoration: 'line-through',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                      >
                        {course.originalPrice}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold mb-2 transition-colors duration-500"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '18px',
                        color: '#3D3A3A',
                        letterSpacing: '-0.04em',
                        lineHeight: '22px',
                      }}
                    >
                      {course.title}
                    </h3>
                    <p
                      className="mb-4 transition-colors duration-500"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: '#616161',
                        lineHeight: '15px',
                      }}
                    >
                      {course.subtitle}
                    </p>

                    {/* Instructor */}
                    <div className="flex items-center mb-3">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-7 h-7 rounded-full mr-2 group-hover:ring-2 group-hover:ring-white transition-all duration-500"
                        style={{ objectFit: 'cover', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                      />
                      <span
                        className="transition-colors duration-500"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '13px',
                          color: '#525252',
                        }}
                      >
                        {course.instructor.name}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 mr-1 transition-colors duration-500" style={{ color: '#F8BC24', fill: '#F8BC24' }} />
                      <span
                        className="transition-colors duration-500"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '11px',
                          color: '#7F7E97',
                          marginLeft: 2
                        }}
                      >
                        {course.rating} {course.reviews}
                      </span>
                    </div>

                    {/* Course Stats */}
                    <div
                      className="flex items-center justify-between border-t pt-3 group-hover:border-gray-300 transition-all duration-500"
                      style={{ borderTop: '1px solid #F3F4F6', color: '#505050' }}
                    >
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 transition-colors duration-500" style={{ color: '#7F7E97' }} />
                        <span className="transition-colors duration-500" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 transition-colors duration-500" style={{ color: '#7F7E97' }} />
                        <span className="transition-colors duration-500" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.lectures}</span>
                      </div>
                      <div className="flex items-center">
                        <Play className="w-4 h-4 mr-1 transition-colors duration-500" style={{ color: '#7F7E97' }} />
                        <span className="transition-colors duration-500" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.videos}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Grid Layout */}
          <div className="block lg:hidden px-2 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {jobGuaranteedCourses.map((course) => (
                <div
                  key={`mobile-${course.id}`}
                  className="group w-full bg-white hover:bg-gradient-to-br hover:from-[#B8A9DB] hover:to-[#9B89C7] shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer transform hover:-translate-y-3 hover:scale-105 hover:border-white border-2 border-[#B5B5C3]"
                  style={{
                    borderRadius: '14px',
                    minHeight: '400px',
                    boxSizing: 'border-box'
                  }}
                >
                  {/* Course Image */}
                  <div className="relative group-hover:bg-transparent transition-all duration-700 rounded-t-[12px] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-[160px] md:h-[180px] object-cover group-hover:opacity-100 group-hover:brightness-105 transition-all duration-700"
                      style={{ backgroundColor: '#f8fafc', borderRadius: '11px', marginTop: 12, marginLeft: 12, marginRight: 12, width: 'calc(100% - 24px)' }}
                    />
                    <div className="absolute top-[172px] md:top-[192px] left-4 md:left-6">
                      <span
                        className="px-3 md:px-4 py-1 rounded-full text-xs font-medium group-hover:bg-white group-hover:text-[#9B89C7] group-hover:shadow-lg transition-all duration-500"
                        style={{
                          background: '#E8E0F5',
                          color: '#161439',
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '12px',
                          borderRadius: '31px',
                          minWidth: '70px',
                          display: 'inline-block',
                          textAlign: 'center',
                        }}
                      >
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-3 md:p-4 group-hover:bg-transparent transition-all duration-700">
                    {/* Price */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, marginBottom: 6 }}>
                      <span
                        className="transition-colors duration-500 font-bold"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 700,
                          fontSize: '16px',
                          color: '#453E75',
                          lineHeight: '28px',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                      >
                        {course.price}
                      </span>
                      <span
                        className="transition-colors duration-500"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '12px',
                          color: '#7F7E97',
                          textDecoration: 'line-through',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                      >
                        {course.originalPrice}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold mb-2 transition-colors duration-500"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '16px',
                        color: '#3D3A3A',
                        letterSpacing: '-0.04em',
                        lineHeight: '20px',
                      }}
                    >
                      {course.title}
                    </h3>
                    <p
                      className="mb-3 transition-colors duration-500"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '11px',
                        color: '#616161',
                        lineHeight: '14px',
                      }}
                    >
                      {course.subtitle}
                    </p>

                    {/* Instructor & Rating Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <img
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          className="w-6 h-6 rounded-full mr-2 group-hover:ring-2 group-hover:ring-white transition-all duration-500"
                          style={{ objectFit: 'cover', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                        />
                        <span
                          className="transition-colors duration-500"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '12px',
                            color: '#525252',
                          }}
                        >
                          {course.instructor.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 transition-colors duration-500" style={{ color: '#F8BC24', fill: '#F8BC24' }} />
                        <span
                          className="transition-colors duration-500"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '10px',
                            color: '#7F7E97',
                          }}
                        >
                          {course.rating} {course.reviews}
                        </span>
                      </div>
                    </div>

                    {/* Course Stats */}
                    <div
                      className="flex items-center justify-between border-t pt-2 group-hover:border-gray-300 transition-all duration-500"
                      style={{ borderTop: '1px solid #F3F4F6', color: '#505050' }}
                    >
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 transition-colors duration-500" style={{ color: '#7F7E97' }} />
                        <span className="transition-colors duration-500" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px' }}>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1 transition-colors duration-500" style={{ color: '#7F7E97' }} />
                        <span className="transition-colors duration-500" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px' }}>{course.lectures}</span>
                      </div>
                      <div className="flex items-center">
                        <Play className="w-3 h-3 mr-1 transition-colors duration-500" style={{ color: '#7F7E97' }} />
                        <span className="transition-colors duration-500" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px' }}>{course.videos}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
         <button
            onClick={handleScrollLeft}
            style={{
              position: 'absolute',
              width: '70px',
              height: '70px',
              left: '1215px',
              top: '76px',
              background: '#fff',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
              borderRadius: '50%',
              zIndex: 30,
            }}
            aria-label="Scroll left"
          >
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 12L18 24L30 36" stroke="#535353" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Bottom Arrow (keep previous logic for now, can adjust position if needed) */}
          <button
            onClick={handleScrollRight}
            style={{
              position: 'absolute',
              width: '70px',
              height: '70px',
              left: '1215px',
              top: '300px', // adjust as needed for vertical spacing
              background: '#fff',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
              borderRadius: '50%',
              zIndex: 30,
            }}
            aria-label="Scroll right"
          >
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 12L30 24L18 36" stroke="#535353" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobGuaranteedCourses;
