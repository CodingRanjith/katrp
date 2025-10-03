import React from "react";
import professionalTeamMeeting from "@/assets/img/hero-kat.jpg";

const UnlockJourney = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 
            className="mb-4 md:mb-6 lg:mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={{ 
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '1.2',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              color: '#453E75'
            }}
          >
            Unlock Your Kattraan Journey in 3 Simple Steps
          </h2>
          <p 
            className="text-sm md:text-base lg:text-lg max-w-[300px] md:max-w-[500px] lg:max-w-[722px] mx-auto"
            style={{ 
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.2',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              color: '#000000',
              justifyContent: 'center'
            }}
          >
            A guided path designed to take you from beginner to expert—step by step, with clarity and confidence.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-8">
          {/* Step 1 - Mobile */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#3F3F3F] to-[#F6F5F8] bg-clip-text text-transparent">
              01
            </div>
            <div className="w-full max-w-md bg-[#F6F5F8] rounded-2xl p-6 shadow-lg relative">
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#7B6BA8] rounded-r-2xl"></div>
              <h3 className="text-lg font-bold text-[#3F3F3F] mb-3 underline">
                Discover
              </h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                Find your ideal course from our curated catalog of learning paths. Each program is carefully designed to match your goals and ignite your passions. Learn from expert mentors, gain hands-on experience, and build future-ready skills.
              </p>
            </div>
          </div>

          {/* Step 2 - Mobile */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#3F3F3F] to-[#F6F5F8] bg-clip-text text-transparent">
              02
            </div>
            <div className="w-full max-w-md bg-[#F6F5F8] rounded-2xl p-6 shadow-lg relative">
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#7B6BA8] rounded-r-2xl"></div>
              <h3 className="text-lg font-semibold text-[#3F3F3F] mb-3 underline">
                Learn & Build
              </h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                Engage with interactive content that keeps you motivated every step of the way. Experience hands-on projects that bring concepts to life with real-world applications.
              </p>
            </div>
          </div>

          {/* Step 3 - Mobile */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#3F3F3F] to-[#F6F5F8] bg-clip-text text-transparent">
              03
            </div>
            <div className="w-full max-w-md bg-[#F6F5F8] rounded-2xl p-6 shadow-lg relative">
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#7B6BA8] rounded-r-2xl"></div>
              <h3 className="text-lg font-semibold text-[#3F3F3F] mb-3 underline">
                Advance Your Career
              </h3>
              <p className="text-sm text-[#5C5C5C] leading-relaxed">
                Earn globally recognized professional certificates that showcase your expertise. Stand out to top employers with skills that are practical, in-demand, and future-ready.
              </p>
            </div>
          </div>

          {/* Image - Mobile */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-sm rounded-xl shadow-2xl overflow-hidden">
              <img 
                src={professionalTeamMeeting} 
                alt="Professional team meeting"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative" style={{ height: '400px' }}>
          {/* Step 1 - Discover */}
          <div 
            className="absolute"
            style={{
              width: '496px',
              height: '103px',
              left: '235px',
              top: '0px',
              background: '#F6F5F8',
              boxShadow: '0px 0px 14px 5px rgba(0, 0, 0, 0.25)',
              borderRadius: '14px'
            }}
          >
            {/* Right Border - Purple */}
            <div 
              className="absolute"
              style={{
                width: '16px',
                height: '103px',
                right: '0px',
                top: '0px',
                background: '#7B6BA8',
                borderRadius: '0px 14px 14px 0px'
              }}
            ></div>
            <h3 
              className="absolute"
              style={{
                width: '149px',
                height: '29px',
                left: '26px',
                top: '9px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '19px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                textDecorationLine: 'underline',
                color: '#3F3F3F'
              }}
            >
              Discover
            </h3>
            <p 
              className="absolute"
              style={{
                width: '432px',
                height: '51px',
                left: '26px',
                top: '38px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '15px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.04em',
                color: '#5C5C5C'
              }}
            >
              Find your ideal course from our curated catalog of learning paths. Each program is carefully designed to match your goals and ignite your passions. Learn from expert mentors, gain hands-on experience, and build future-ready skills.
            </p>
          </div>

          {/* Step 2 - Learn & Build */}
          <div 
            className="absolute"
            style={{
              width: '496px',
              height: '103px',
              left: '355px',
              top: '127px',
              background: '#F6F5F8',
              boxShadow: '0px 0px 14px 5px rgba(0, 0, 0, 0.25)',
              borderRadius: '14px'
            }}
          >
            {/* Right Border - Blue */}
            <div 
              className="absolute"
              style={{
                width: '16px',
                height: '103px',
                right: '0px',
                top: '0px',
                background: '#7B6BA8',
                borderRadius: '0px 14px 14px 0px'
              }}
            ></div>
            <h3 
              className="absolute"
              style={{
                width: '149px',
                height: '29px',
                left: '26px',
                top: '9px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '19px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                textDecorationLine: 'underline',
                color: '#3F3F3F'
              }}
            >
              Learn & Build
            </h3>
            <p 
              className="absolute"
              style={{
                width: '376px',
                height: '44px',
                left: '26px',
                top: '40px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '15px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.04em',
                color: '#5C5C5C'
              }}
            >
              Engage with interactive content that keeps you motivated every step of the way. Experience hands-on projects that bring concepts to life with real-world applications.
            </p>
          </div>

          {/* Step 3 - Advance Your Career */}
          <div 
            className="absolute"
            style={{
              width: '496px',
              height: '103px',
              left: '162px',
              top: '254px',
              background: '#F6F5F8',
              boxShadow: '0px 0px 14px 5px rgba(0, 0, 0, 0.25)',
              borderRadius: '14px'
            }}
          >
            {/* Right Border - Green */}
            <div 
              className="absolute"
              style={{
                width: '16px',
                height: '103px',
                right: '0px',
                top: '0px',
                background: '#7B6BA8',
                borderRadius: '0px 14px 14px 0px'
              }}
            ></div>
            <h3 
              className="absolute"
              style={{
                width: '208px',
                height: '29px',
                left: '26px',
                top: '9px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '19px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.02em',
                textDecorationLine: 'underline',
                color: '#3F3F3F'
              }}
            >
              Advance Your Career
            </h3>
            <p 
              className="absolute"
              style={{
                width: '432px',
                height: '51px',
                left: '26px',
                top: '38px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '15px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.04em',
                color: '#5C5C5C'
              }}
            >
              Earn globally recognized professional certificates that showcase your expertise. Stand out to top employers with skills that are practical, in-demand, and future-ready.
            </p>
          </div>

          {/* Number 01 */}
          <div 
            className="absolute"
            style={{
              width: '76px',
              height: '63px',
              left: '731px',
              top: '20px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '61px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(180deg, #3F3F3F 0%, #F6F5F8 79.33%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              justifyContent: 'center'
            }}
          >
            01
          </div>

          {/* Number 02 */}
          <div 
            className="absolute"
            style={{
              width: '76px',
              height: '63px',
              left: '277px',
              top: '147px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '61px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(180deg, #3F3F3F 0%, #F6F5F8 79.33%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              justifyContent: 'center'
            }}
          >
            02
          </div>

          {/* Number 03 */}
          <div 
            className="absolute"
            style={{
              width: '76px',
              height: '63px',
              left: '661px',
              top: '270px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '50px',
              lineHeight: '61px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(180deg, #3F3F3F 0%, #F6F5F8 79.33%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              justifyContent: 'center'
            }}
          >
            03
          </div>

          {/* Image */}
          <div 
            className="absolute"
            style={{
              width: '379px',
              height: '383px',
              left: '901px',
              top: '0px',
              borderRadius: '12px',
              boxShadow: '0px 0px 19px 6px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden'
            }}
          >
            <img 
              src={professionalTeamMeeting} 
              alt="Professional team meeting"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockJourney;
