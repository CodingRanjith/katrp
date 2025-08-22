import { courseCategories } from "@/config";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GraduationCap, Star, TrendingUp, Settings2 } from "lucide-react";

// Inject Sora and Poppins fonts for this component
const catFontStyle = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Sora:wght@700&display=swap');\n.cat-sora { font-family: 'Sora', sans-serif; }\n.cat-poppins { font-family: 'Poppins', sans-serif; }`;
function useCatFont() {
  useEffect(() => {
    if (!document.getElementById('cat-font-style')) {
      const style = document.createElement('style');
      style.id = 'cat-font-style';
      style.innerHTML = catFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}

const iconMap = {
  tech: <Settings2 className="w-5 h-5 mr-2" />,
  trending: <TrendingUp className="w-5 h-5 mr-2" />,
  featured: <Star className="w-5 h-5 mr-2" />,
  academic: <GraduationCap className="w-5 h-5 mr-2" />,
};

function CourseCategories() {
  useCatFont();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(
    courseCategories[0]?.id || ""
  );

  const handleNavigateToCoursesPage = (categoryId) => {
    setActiveCategory(categoryId);
    const currentFilter = { category: [categoryId] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#fff] to-[#d3c9ed] text-center cat-poppins">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181818] mb-3 cat-sora">
          🚀 Most Popular Courses
        </h2>
        <p className="text-sm sm:text-base text-[#181818] mb-8 cat-poppins">
          Choose from hundreds of high-quality courses offered by top experts
          and institutions.
        </p>
      </div>

      <div className="bg-[#fff] px-6 py-8 rounded-2xl shadow-lg border border-[#d3c9ed] max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleNavigateToCoursesPage(category.id)}
              className={`flex items-center px-5 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 ease-in-out cat-poppins
                ${
                  activeCategory === category.id
                    ? "bg-[#8b72cc] text-[#fff] shadow-lg"
                    : "bg-[#d3c9ed] text-[#181818] hover:bg-[#8b72cc] hover:text-[#fff]"
                }`}
            >
              {iconMap[category.icon] || null}
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseCategories;
