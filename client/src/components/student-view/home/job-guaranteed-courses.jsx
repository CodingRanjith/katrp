import React from "react";
import { Star, Clock, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobGuaranteedCourses = [
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
    title: "UI/UX Designer Masterclass 2025",
    category: "Design",
    price: 699,
    originalPrice: 1499,
    instructor: {
      name: "Emma",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.7,
    reviews: 1847,
    image: "/api/placeholder/300/200",
    duration: "18h 20m",
    lectures: 16,
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
    rating: 4.9,
    reviews: 3214,
    image: "/api/placeholder/300/200",
    duration: "16h 10m",
    lectures: 14,
    level: "Beginner"
  },
  {
    id: 4,
    title: "Business Analytics Masterclass",
    category: "Business",
    price: 799,
    originalPrice: 1599,
    instructor: {
      name: "John Smith",
      avatar: "/api/placeholder/32/32"
    },
    rating: 4.8,
    reviews: 1956,
    image: "/api/placeholder/300/200",
    duration: "22h 30m",
    lectures: 18,
    level: "Advanced"
  }
];

const JobGuaranteedCourses = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-medium text-sm mb-4">
            Job Guaranteed Courses
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Secure your future with 100% placement-focused training.
          </h2>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobGuaranteedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl font-bold text-gray-800">
                    ₹{course.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹{course.originalPrice}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800 mb-3 line-clamp-2">
                  {course.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center mb-3">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    {course.instructor.name}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700 ml-1">
                      {course.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({course.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.lectures}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium">
            View All Job Guaranteed Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobGuaranteedCourses;
