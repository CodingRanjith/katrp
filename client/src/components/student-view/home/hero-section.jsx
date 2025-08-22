import React, { useContext, useEffect, useState } from "react";
// Inject Sora and Poppins fonts for this component
const heroFontStyle = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Sora:wght@700&display=swap');\n.hero-sora { font-family: 'Sora', sans-serif; }\n.hero-poppins { font-family: 'Poppins', sans-serif; }`;
function useHeroFont() {
  useEffect(() => {
    if (!document.getElementById('hero-font-style')) {
      const style = document.createElement('style');
      style.id = 'hero-font-style';
      style.innerHTML = heroFontStyle;
      document.head.appendChild(style);
    }
  }, []);
}
import pattern from "@/assets/img/pattern.jpg";
import diamond from "@/assets/img/diamond.svg";
import angular from "@/assets/img/angular-icon.webp";
import react from "@/assets/img/react-icon.webp";
import banner from "@/assets/img/hero-final.png";
import bulb from "@/assets/img/bulb.png";
import diamondblue from "@/assets/img/diamond-blue.svg";
import { FiUsers } from "react-icons/fi";
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import "../home/hero-section.css"; // Import the CSS file for animations

    const HeroSection = () => {
      useHeroFont();
      const { auth } = useContext(AuthContext);
      const userName = auth.user?.userName || "Learner";
      const [greeting, setGreeting] = useState("");
      const [randomMsg, setRandomMsg] = useState("");
      const messages = [
        "Ready to explore new skills?",
        "Today is a great day to learn!",
        "Keep pushing your limits!",
        "Unlock your next achievement!",
        "Your journey to mastery starts now!",
      ];
      useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
          setGreeting("🌞 Good morning");
        } else if (hour < 18) {
          setGreeting("🌤️ Good afternoon");
        } else {
          setGreeting("🌆 Good evening");
        }
        const random = messages[Math.floor(Math.random() * messages.length)];
        setRandomMsg(random);
      }, []);
      return (
        <section className="lg:-mt-12 flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-10 bg-[#fff] overflow-hidden hero-poppins">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-6 text-center lg:text-left z-10">
            {/* Welcome Message */}
            <div className="space-y-1">
              <p className="text-base sm:text-lg text-[#181818] font-semibold hero-poppins">
                {greeting}, <span className="text-[#8b72cc]">{userName}!</span>
              </p>
              <p className="text-sm sm:text-base text-[#8b72cc] italic hero-poppins">
                {randomMsg}
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#181818] leading-tight sm:leading-snug hero-sora">
              Level Up Your Skills{' '}
              <span className="text-[#8b72cc]">Anytime, Anywhere</span>
            </h1>
            <p className="text-[#181818] text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 hero-poppins">
              Whether you're aiming for your dream job or just curious, Kattraan
              makes learning fun, flexible, and future-ready.
            </p>
            {/* FEATURES */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-[#181818] hero-poppins">
              {[
                "Learn with experts", "Get certificate", "Get membership"
              ].map((text, i) => (
                <span
                  key={i}
                  className="text-sm sm:text-base flex items-center gap-2"
                >
                  <BadgeCheck className="text-[#8b72cc] w-4 h-4 sm:w-5 sm:h-5" />
                  {text}
                </span>
              ))}
            </div>
          </div>
          {/* RIGHT IMAGE & GRAPHICS */}
          <div className="relative w-full lg:w-[50%] flex justify-center items-center mt-10 -mt-6 lg:mt-0 lg:-mt-12 mb-12 lg:mb-0">
            <svg
              className="absolute -top-32 sm:-top-40 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-[300px] sm:w-[450px] md:w-[550px] lg:w-[600px] h-[700px] sm:h-[900px] lg:h-[1190px] z-0"
              viewBox="0 0 800 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(400,600)">
                <path
                  d="M180,-300C230,-240,260,-160,265,-85C270,-10,250,60,210,130C170,200,110,270,35,300C-40,330,-130,320,-200,280C-270,240,-320,170,-350,90C-380,10,-390,-80,-350,-160C-310,-240,-220,-310,-130,-350C-40,-390,60,-410,150,-370C240,-330,130,-330,180,-300Z"
                  fill="#0f172a"
                />
              </g>
            </svg>
            <img
              className="z-20 w-10 h-10 sm:w-14 sm:h-14 absolute top-4 left-10"
              src={bulb}
              alt="Light Bulb"
            />
            <img
              src={banner}
              alt="Student"
              className="w-[240px] sm:w-[320px] md:w-[450px] lg:max-w-[800px] z-10"
            />
            <div className="hidden sm:flex absolute top-[21%] right-[3%] bg-[#d3c9ed] px-4 py-3 rounded-lg shadow-md items-center gap-2 z-20">
              <FiUsers className="text-[#8b72cc] w-6 h-6 lg:w-7 lg:h-7" />
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-[#181818] font-semibold hero-poppins">
                  Our daily new students
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-[#8b72cc] hero-poppins">1K+</p>
              </div>
            </div>
            <div className="absolute bottom-[5%] left-[4%] backdrop-blur-md bg-[#fff]/30 px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 z-20 border border-[#d3c9ed] text-xs sm:text-sm">
              <span className="bg-[#8b72cc] p-2 rounded-full text-white">
                <FaCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-lg text-[#8b72cc] hero-sora">Congratulations</p>
                <p className="text-[14px] text-[#181818] hero-poppins">
                  Your admission completed
                </p>
              </div>
            </div>
            <img
              src={angular}
              alt="Angular"
              className="absolute top-[10%] right-[10%] w-8 h-8 sm:w-10 sm:h-10 animate-bounce-slow z-20"
            />
            <img
              src={react}
              alt="React"
              className="absolute bottom-[18%] right-[2%] w-9 h-9 sm:w-10 sm:h-10 animate-rotate z-20"
            />
            <img
              src={diamond}
              alt="Diamond"
              className="absolute top-[30%] left-[10%] w-8 h-8 sm:w-10 sm:h-10 animate-float z-20"
            />
            <img
              src={diamondblue}
              alt="Diamond-blue"
              className="absolute top-[20%] left-[28%] w-4 h-6 animate-transform z-20"
            />
          </div>
        </section>
      );
    };

    export default HeroSection;

