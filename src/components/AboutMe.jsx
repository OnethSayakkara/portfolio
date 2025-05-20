import React from 'react';
import aboutme from '../assets/images/aboutme.jpeg';

function AboutMe() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col medium:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-10">
          {/* Image */}
          <div className="w-full max-w-[450px] lg:max-w-[600px] lg:pl-28 lg:mt-10 mt-7">
            <img
              className="w-full h-auto rounded-3xl border-2 border-white object-cover"
              src={aboutme}
              alt="About Me"
            />
          </div>
          {/* Text and SVG */}
          <div className="w-full flex flex-col items-center lg:items-start ">
            <div className="space-y-4 text-left w-full max-w-[650px]">
              <h2
                className="font-primary text-white text-base sm:text-lg px-3 sm:px-4 py-1 w-fit rounded-md"
                style={{ backgroundColor: 'oklch(0.33 0.09 251.55)' }}
              >
                ABOUT ME
              </h2>
              <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-4 lg:space-y-0 lg:space-x-8">
                <h1 className="text-white font-primary text-4xl sm:text-4xl lg:text-4xl font-bold max-w-[650px] w-full">
                  I AM AVAILABLE FOR{' '}
                  <span style={{ color: 'oklch(0.63 0.2 254.34)' }}>
                    UI UX DESIGN
                  </span>{' '}
                  PROJECTS
                </h1>
                <img
                  className="w-24 sm:w-32 lg:w-40 h-auto animate-spin-slow hidden medium:block"
                  src="https://janna-react.vercel.app/images/effect-2.svg"
                  alt="Decorative SVG Effect"
                />
              </div>
              <div className="font-primary text-lg max-w-[650px] w-full">
                <p className="text-gray-300 mb-6">
                  I'm an undergraduate software engineer from Sri Lanka with a
                  passion for creating elegant, efficient solutions to complex
                  problems. Currently pursuing my BSc in Computing and Software
                  Engineering, I'm dedicated to expanding my knowledge and skills in
                  the field.
                </p>
                <p className="text-gray-300 mb-6">
                  With a strong foundation in Java development and software
                  engineering principles, I approach each project with creativity,
                  attention to detail, and a commitment to delivering high-quality
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;