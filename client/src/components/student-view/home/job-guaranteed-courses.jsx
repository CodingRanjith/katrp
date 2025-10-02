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
      className="relative py-16 px-4 lg:px-8 xl:px-16"
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
        {/* Section Header */}
        <div className="text-left mb-8 px-4">
          <div
            className="mb-1"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '39px',
              color: '#453E75',
              letterSpacing: '-0.01em',
            }}
          >
            Job Guaranteed Courses
          </div>
          <div
            className="mb-6"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '22px',
              color: '#000',
              letterSpacing: '-0.01em',
            }}
          >
            Secure your future with 100% placement-focused training.
          </div>
        </div>

        {/* Course Cards */}
        <div className="relative px-4">
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
                className="flex-none w-[300px] sm:w-[320px] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #B5B5C3',
                  borderRadius: '14px',
                  scrollSnapAlign: 'start',
                  minHeight: '448px',
                  boxSizing: 'border-box'
                }}
              >
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[180px] object-cover"
                    style={{ backgroundColor: '#f8fafc', borderRadius: '11px', marginTop: 16, marginLeft: 16, marginRight: 16, width: 'calc(100% - 32px)' }}
                  />
                  <div className="absolute top-[196px] left-6">
                    <span
                      className="px-4 py-1 rounded-full text-xs font-medium"
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
                <div className="p-4">
                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginBottom: 8 }}>
                    <span
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
                    className="font-bold mb-2"
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
                    className="mb-4"
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
                      className="w-7 h-7 rounded-full mr-2"
                      style={{ objectFit: 'cover', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                    />
                    <span
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
                    <Star className="w-4 h-4 mr-1" style={{ color: '#F8BC24', fill: '#F8BC24' }} />
                    <span
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
                    className="flex items-center justify-between border-t pt-3"
                    style={{ borderTop: '1px solid #F3F4F6', color: '#505050' }}
                  >
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" style={{ color: '#7F7E97' }} />
                      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" style={{ color: '#7F7E97' }} />
                      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.lectures}</span>
                    </div>
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-1" style={{ color: '#7F7E97' }} />
                      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.videos}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handleScrollLeft}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 z-10 flex items-center justify-center"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex'
            }}
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleScrollRight}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 z-10 flex items-center justify-center"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex'
            }}
            aria-label="Scroll right"
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
