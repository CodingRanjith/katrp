import React, { useContext, useEffect, useState } from "react";
// Inject Inter and Plus Jakarta Sans fonts for this component
const heroFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  .hero-inter { font-family: 'Inter', sans-serif; }
  .hero-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
  .light-purple-bg { background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%); }
`;

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

import { Play, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import heroImage from "@/assets/img/hero.png"; // Professional learner with laptop image
import "../home/hero-section.css"; // Import the CSS file for animations

    const HeroSection = () => {
      useHeroFont();
      const { auth } = useContext(AuthContext);
      const [searchQuery, setSearchQuery] = useState("");

      const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
        setSearchQuery("");
      };

      return (
        <div className="w-full">
          {/* Search Bar Section with Purple Background */}
          <div 
            className="w-full"
            style={{ 
              background: 'linear-gradient(90deg, #6B63A0 0%, #8B7BB8 100%)',
              padding: '16px 0'
            }}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
              {/* Search Bar */}
              <form
                onSubmit={handleSearch}
                className="flex-1 flex justify-center"
              >
                <div className="relative w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder="Search for anything"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white rounded-full px-6 py-3 text-base placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg hero-inter border-0"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 ml-6">
                <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.219-.438-.219-1.085c0-1.016.219-1.775.219-1.775s.877-1.512.877-3.744c0-2.452-1.463-4.291-3.283-4.291-1.553 0-2.809 1.166-2.809 2.563 0 .621.234 1.283.526 1.644.096.117.109.219.08.339-.031.131-.099.389-.127.497-.037.146-.151.177-.349.107-1.304-.607-2.123-2.511-2.123-4.040 0-3.282 2.383-6.291 6.87-6.291 3.606 0 6.411 2.57 6.411 6.004 0 3.583-2.260 6.467-5.394 6.467-1.053 0-2.044-.548-2.383-1.207 0 0-.521 1.983-.649 2.473-.234.896-.866 2.015-1.289 2.7C9.525 23.763 10.748 24 12.017 24c6.624 0 11.90-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Content Section */}
          <div 
            className="w-full relative"
            style={{
              background: 'linear-gradient(180deg, #E8E0F5 0%, #F7F6F9 100%)',
              minHeight: '600px'
            }}
          >
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between py-16">
              {/* LEFT CONTENT */}
              <div className="w-full lg:w-1/2 space-y-6 text-left z-10">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight hero-jakarta">
                  <span style={{ color: '#453E75' }}>Level Up Your</span><br />
                  <span style={{ color: '#453E75' }}>Skills Anytime, Anywhere</span>
                </h1>
                
                <p className="text-gray-800 text-lg max-w-xl leading-relaxed hero-inter">
                  Join millions of learners worldwide and master new skills with 
                  our comprehensive online courses.
                </p>
                
                {/* Action Button */}
                <div className="pt-4">
                  <Button 
                    className="px-8 py-3 rounded-full font-medium text-lg hero-inter shadow-lg"
                    style={{
                      background: 'linear-gradient(90deg, #453E75 0%, #7B6BA8 100%)',
                      color: 'white'
                    }}
                  >
                    Start Learning
                  </Button>
                </div>
              </div>
              
              {/* RIGHT IMAGE */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 relative">
                <div className="relative z-10">
                  {/* Dotted circle background */}
                  <div className="absolute -top-8 -right-8 w-96 h-96 border-4 border-dotted border-gray-400 rounded-full opacity-50"></div>
                  
                  {/* Purple circle background */}
                  <div className="absolute top-4 right-4 w-80 h-80 bg-purple-200/30 rounded-full"></div>
                  
                  {/* Small purple icon */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center z-20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  
                  {/* Main person image */}
                  <img 
                    src={heroImage}
                    alt="Professional learner with laptop"
                    className="relative z-30 w-80 h-auto lg:w-96 lg:h-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default HeroSection;

