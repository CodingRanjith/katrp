import React, { useRef } from "react";
import { Star, Clock, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingCourses = [
  {
    id: 1,
    title: "Web Development For Beginners",
    category: "Development",
    price: 599,
    originalPrice: 1299,
    instructor: {
      name: "David Johnson",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.8,
    reviews: 2376,
    image: "/api/placeholder/300/200",
    duration: "25h 20m",
    lectures: 22,
    level: "Beginner"
  },
  {
    id: 2,
    title: "Illustrator MasterClass",
    category: "Design",
    price: 899,
    originalPrice: 1799,
    instructor: {
      name: "Jack",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.9,
    reviews: 1564,
    image: "/api/placeholder/300/200",
    duration: "20h 30m",
    lectures: 12,
    level: "Intermediate"
  },
  {
    id: 3,
    title: "HTML - The Complete Guide 2025",
    category: "Development",
    price: 599,
    originalPrice: 1199,
    instructor: {
      name: "Sara",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.8,
    reviews: 3214,
    image: "/api/placeholder/300/200",
    duration: "16h 10m",
    lectures: 14,
    level: "Beginner"
  },
  {
    id: 4,
    title: "Digital Marketing Complete Course",
    category: "Marketing",
    price: 799,
    originalPrice: 1599,
    instructor: {
      name: "Mike Chen",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.7,
    reviews: 1892,
    image: "/api/placeholder/300/200",
    duration: "18h 45m",
    lectures: 15,
    level: "Intermediate"
  }
];

const TrendingCourses = () => {
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24;
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
        background: '#F7F7FB',
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
            Trending Courses
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
            Upgrade your future with today's hottest courses.
          </div>
        </div>

        {/* Course Cards */}
        <div className="relative px-4 flex items-center justify-center" style={{minHeight: '520px'}}>
          {/* Arrow Controls: vertical stack, right side, pixel-perfect alignment */}
          {/* Absolute positioned arrows for pixel-perfect placement */}
          {/* Top Arrow */}
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
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' },
              scrollSnapType: 'x mandatory',
              width: '100%',
            }}
          >
            {trendingCourses.map((course) => (
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
                      ₹{course.price}
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
                      ₹{course.originalPrice}
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
                      {course.rating} ({course.reviews.toLocaleString()})
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
                      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px' }}>{course.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
