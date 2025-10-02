import React, { useContext, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { AuthContext } from "@/context/auth-context";
import heroImage from "@/assets/img/hero.png";

const HeroSection = () => {
  const { auth } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className="w-full relative">
      {/* Search Bar Section with Purple Background */}
      <div 
        className="w-full relative z-20"
        style={{ 
          background: 'linear-gradient(90deg, #6B63A0 0%, #8B7BB8 100%)',
          padding: '12px 0'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white rounded-full px-6 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg border-0"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#8B8B8B'
                }}
              />
              <button
                type="submit"
                className="absolute right-4 top-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Search className="w-5 h-5" style={{ color: '#8B8B8B' }} />
              </button>
            </div>
          </form>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3 ml-6">
            <button className="p-2 rounded-lg hover:bg-purple-700/20 transition-all">
              <svg className="w-5 h-5 text-purple-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-700/20 transition-all">
              <svg className="w-5 h-5 text-purple-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-700/20 transition-all">
              <svg className="w-5 h-5 text-purple-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-700/20 transition-all">
              <svg className="w-5 h-5 text-purple-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content Section - Rectangle 156 */}
      <div 
        className="w-full relative"
        style={{
          position: 'relative',
          width: '100%',
          height: '694px',
          left: '0px',
          top: '0px',
          background: 'linear-gradient(360deg, #F7F6F9 0%, #E8E0F5 100%)'
        }}
      >
        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-full overflow-hidden">
          {/* Main Title */}
          <h1 
            className="absolute"
            style={{
              width: '704px',
              height: '140px',
              left: '106px',
              top: '150px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '53px',
              lineHeight: '64px',
              color: '#453E75',
              zIndex: '20'
            }}
          >
            Level Up Your<br />Skills Anytime, Anywhere
          </h1>

          {/* Subtitle */}
          <p 
            className="absolute"
            style={{
              width: '543px',
              height: '51px',
              left: '106px',
              top: '310px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '22px',
              color: '#000000',
              zIndex: '20'
            }}
          >
            Join millions of learners worldwide and master new skills with our comprehensive online courses.
          </p>

          {/* Start Learning Button */}
          <div className="absolute" style={{ left: '106px', top: '390px', zIndex: '20' }}>
            <button
              className="relative"
              style={{
                width: '181px',
                height: '43px',
                background: 'linear-gradient(90deg, #B8A9D9 0%, #625691 42.79%, #453E75 84.13%)',
                boxShadow: '0px 0px 9.3px 2px rgba(0, 0, 0, 0.25)',
                borderRadius: '21px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  width: '97px',
                  height: '17px',
                  left: '42px',
                  top: '13px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '119%',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  letterSpacing: '-1px',
                  color: '#FFFFFF'
                }}
              >
                Start Learning
              </span>
            </button>
          </div>

          {/* Dotted Circle Background - Large outer circle */}
          <div 
            className="absolute"
            style={{
              width: '520px',
              height: '520px',
              right: '-120px',
              top: '80px',
              border: '3px dotted #453E75',
              borderRadius: '50%',
              opacity: '0.4',
              zIndex: '1'
            }}
          ></div>
          
          {/* Purple Circle Background - Inner solid circle */}
          <div 
            className="absolute"
            style={{
              width: '380px',
              height: '380px',
              right: '-50px',
              top: '150px',
              background: 'rgba(139, 123, 184, 0.12)',
              borderRadius: '50%',
              zIndex: '2'
            }}
          ></div>
          
          {/* Small Purple Icon with checkmark */}
          <div 
            className="absolute"
            style={{
              width: '48px',
              height: '48px',
              left: '750px',
              top: '120px',
              background: '#453E75',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '15'
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#FFFFFF' }}
            >
              <path 
                d="M8 12L11 15L16 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Main Hero Image - Professional with laptop */}
          <div
            className="absolute"
            style={{
              width: '600px',
              height: '500px',
              right: '20px',
              top: '120px',
              zIndex: '10'
            }}
          >
            <img 
              src={heroImage}
              alt="Professional learner with laptop"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
            />
          </div>
        </div>

        {/* Mobile/Tablet Responsive Layout */}
        <div className="lg:hidden px-4 py-6">
          <div className="text-center space-y-4">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 800,
                color: '#453E75'
              }}
            >
              Level Up Your<br />Skills Anytime, Anywhere
            </h1>

            <p 
              className="text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                color: '#000000'
              }}
            >
              Join millions of learners worldwide and master new skills with our comprehensive online courses.
            </p>

            <div className="pt-4">
              <button
                className="px-8 py-3 rounded-full font-medium text-base shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #B8A9D9 0%, #625691 42.79%, #453E75 84.13%)',
                  color: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  letterSpacing: '-1px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Start Learning
              </button>
            </div>

            <div className="flex justify-center mt-8 relative">
              {/* Mobile Dotted Circle */}
              <div 
                className="absolute w-64 h-64 border-2 border-dotted border-purple-400 rounded-full opacity-50"
                style={{ top: '-20px', right: '-20px' }}
              ></div>
              
              {/* Mobile Purple Circle */}
              <div 
                className="absolute w-48 h-48 bg-purple-200 bg-opacity-30 rounded-full"
                style={{ top: '20px', right: '20px' }}
              ></div>
              
              {/* Mobile Icon */}
              <div 
                className="absolute w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center z-10"
                style={{ top: '20px', left: '20px' }}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-white"
                >
                  <path 
                    d="M8 12L11 15L16 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              <img 
                src={heroImage}
                alt="Professional learner with laptop"
                className="w-full max-w-md h-auto object-contain relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

    export default HeroSection;

