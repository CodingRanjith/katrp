import React, { useEffect } from "react";

// Inject Sora and Poppins fonts for this component
const becomeFontStyle = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Sora:wght@700&display=swap');\n.become-sora { font-family: 'Sora', sans-serif; }\n.become-poppins { font-family: 'Poppins', sans-serif; }`;
function useBecomeFont() {
  useEffect(() => {
    if (!document.getElementById('become-font-style')) {
      const style = document.createElement('style');
      style.id = 'become-font-style';
      style.innerHTML = becomeFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}

const BecomeInstructor = () => {
  useBecomeFont();
  return (
    <section className="bg-gradient-to-br from-[#fff] to-[#d3c9ed] px-4 sm:px-8 lg:px-16 py-14 become-poppins">
      <div className="relative bg-[#fff] text-[#181818] rounded-2xl p-8 sm:p-12 lg:p-20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
        {/* Background Circles */}
        <div className="absolute w-48 h-48 bg-[#d3c9ed] rounded-full top-4 left-4 z-0"></div>
        <div className="absolute w-4 h-4 bg-[#d3c9ed] rounded-full top-8 right-[40%] z-0"></div>
        <div className="absolute w-5 h-5 bg-[#d3c9ed] rounded-full bottom-8 right-[25%] z-0"></div>

        {/* TEXT */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-[#181818] become-sora">
            Become an Instructor!
          </h2>
          <p className="text-sm sm:text-base text-[#181818] leading-relaxed become-poppins">
            Share your expertise with thousands of eager learners on Kattraan. Inspire the next generation, create impact, and grow your personal brand while earning on your own terms.
          </p>
        </div>

        {/* CTA BUTTON */}
        <div className="relative z-10">
          <a href="/instructor">
            <button className="bg-[#8b72cc] hover:bg-[#7a5eb3] text-[#fff] font-semibold px-8 py-3 rounded-full shadow transition text-base become-poppins">
              Start Teaching Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
