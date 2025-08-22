import { useEffect } from "react";
import { Monitor, UserCircle, GraduationCap, BadgeCheck } from "lucide-react";

// Inject Sora and Poppins fonts for this component
const statsFontStyle = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Sora:wght@700&display=swap');\n.stats-sora { font-family: 'Sora', sans-serif; }\n.stats-poppins { font-family: 'Poppins', sans-serif; }`;
function useStatsFont() {
  useEffect(() => {
    if (!document.getElementById('stats-font-style')) {
      const style = document.createElement('style');
      style.id = 'stats-font-style';
      style.innerHTML = statsFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}

const stats = [
  {
    icon: (
      <Monitor className="text-yellow-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "10K",
    label: "Online Courses",
    bg: "bg-yellow-50",
  },
  {
    icon: (
      <UserCircle className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "200+",
    label: "Expert Tutors",
    bg: "bg-purple-50",
  },
  {
    icon: (
      <GraduationCap className="text-purple-700 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "60K+",
    label: "Online Students",
    bg: "bg-purple-100",
  },
  {
    icon: (
      <BadgeCheck className="text-yellow-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "6K+",
    label: "Certified Courses",
    bg: "bg-yellow-50",
  },
];

function StatsHighlights() {
  useStatsFont();
  return (
    <section className="py-12 px-2 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#fff] to-[#d3c9ed] stats-poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-center text-center gap-4 ${item.bg.replace('bg-purple-50', 'bg-[#d3c9ed]').replace('bg-purple-100', 'bg-[#d3c9ed]').replace('bg-yellow-50', 'bg-[#fff]')} hover:shadow-xl transition duration-300 ease-in-out`}
          >
            <div className="p-4 bg-[#fff] rounded-full shadow-md">{item.icon}</div>
            <div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181818] stats-sora">
                {item.value}
              </h4>
              <p className="text-sm sm:text-lg lg:text-xl text-[#8b72cc] stats-poppins">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsHighlights;
