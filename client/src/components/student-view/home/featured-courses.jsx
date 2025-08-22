import { useContext, useEffect } from "react";
// Inject Sora and Poppins fonts for this component
const featFontStyle = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Sora:wght@700&display=swap');\n.feat-sora { font-family: 'Sora', sans-serif; }\n.feat-poppins { font-family: 'Poppins', sans-serif; }`;
function useFeatFont() {
  useEffect(() => {
    if (!document.getElementById('feat-font-style')) {
      const style = document.createElement('style');
      style.id = 'feat-font-style';
      style.innerHTML = featFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}
import { useNavigate } from "react-router-dom";
import { StudentContext } from "@/context/student-context";
import { AuthContext } from "@/context/auth-context";
import { checkCoursePurchaseInfoService } from "@/services";
import { Star } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";

function FeaturedCourses() {
  useFeatFont();
  const { studentViewCoursesList } = useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleCourseNavigate(courseId) {
    navigate(`/course/details/${courseId}`);
  }

  function formatTotalDuration(curriculum) {
    let totalSeconds = 0;
    curriculum?.forEach((item) => {
      if (item?.duration) {
        const parts = item.duration.split(":").map(Number);
        if (parts.length === 2) {
          const [minutes, seconds] = parts;
          totalSeconds += minutes * 60 + seconds;
        } else if (parts.length === 3) {
          const [hours, minutes, seconds] = parts;
          totalSeconds += hours * 3600 + minutes * 60 + seconds;
        }
      }
    });
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
  }

  return (
    <section className="py-12 px-4 lg:px-20 bg-[#fff] feat-poppins">
      <h2 className="text-3xl font-bold mb-3 text-center text-[#181818] feat-sora">Most Popular Courses</h2>
      <p className="text-[#181818] mb-8 text-center feat-poppins">
        Choose from hundreds of courses from specialist organizations
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
          studentViewCoursesList.map((courseItem) => {
            const lectureCount = courseItem?.curriculum?.length || 0;
            const totalDuration = formatTotalDuration(courseItem?.curriculum);

            return (
              <div
                key={courseItem?._id}
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm border border-[#d3c9ed] hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <img
                  src={courseItem?.image}
                  alt={courseItem?.title}
                  className="w-full h-44 object-cover rounded-t-2xl"
                />

                <div className="p-4">
                  {/* Course Level */}
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#d3c9ed] text-[#8b72cc] rounded mb-2 feat-poppins">
                    {courseItem?.level || "All level"}
                  </span>

                  {/* Course Title */}
                  <h3 className="text-md font-semibold text-[#181818] mb-1 leading-snug feat-sora">
                    {courseItem?.title}
                  </h3>

                  {/* Course Subtitle */}
                  <p className="text-[#8b72cc] text-sm mb-3 line-clamp-2 feat-poppins">
                    {courseItem?.subtitle || "Course description coming soon..."}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center text-sm text-[#181818] mb-2 feat-poppins">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 mr-0.5 ${
                          i < Math.round(courseItem?.rating || 4)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-[#d3c9ed]"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-medium">
                      {courseItem?.rating || "4.5"}/5.0
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-[#181818] font-bold text-md mb-3 feat-poppins">
                    ₹{courseItem?.pricing ? courseItem.pricing.toLocaleString() : "Free"}
                  </div>

                  <hr className="my-3 border-[#d3c9ed]" />

                  {/* Course Meta */}
                  <div className="flex items-center justify-between text-xs text-[#8b72cc] feat-poppins">
                    <div className="flex items-center gap-1">
                      <FaRegClock className="w-4 h-4" />
                      {totalDuration || "1h 30m"} total duration
                    </div>
                    <div className="flex items-center gap-1">
                      <PiChalkboardTeacher className="w-4 h-4" />
                      {lectureCount} lectures
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-[#8b72cc] feat-poppins">No Courses Found</p>
        )}
      </div>
    </section>
  );
}

export default FeaturedCourses;
