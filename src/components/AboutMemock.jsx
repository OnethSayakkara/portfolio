import React from 'react';
import aboutme from '../assets/images/aboutme.jpeg';

function AboutMemock() {
  return (
    <section className="min-h-screen flex items-center justify-center z-0 overflow-x-hidden overflow-y-hidden">
      <div className="w-full max-w-6xl px-4 py-8 medium:py-12 large:py-16">
        <div className="flex flex-col medium:flex-row items-center justify-center medium:justify-center gap-2 medium:max-lg:gap-2">
          {/* SVG 1 (Left Circle) */}
          <div className="hidden medium:block">
            <img
              className="h-64 w-64 medium:max-lg:h-60 medium:max-lg:w-60 rounded-full animate-spin-slow absolute mt-10 medium:mt-16 medium:max-lg:left-24  large:left-32 z-1"
              src="https://janna-react.vercel.app/images/effect-1.svg"
              alt="Decorative SVG Effect 1"
            />
          </div>
          {/* Image */}
          <div className="w-full max-w-[400px] large:max-w-[450px] z-10 mt-5 medium:mt-0">
            <img
              className="w-full h-auto rounded-3xl border-2 border-white object-cover"
              src={aboutme}
              alt="About Me"
            />
          </div>
          {/* Text and SVG 2 */}
          <div className="w-full large:max-w-[500px] medium:max-w-[373px] max-w-[600px]  text-left medium:text-left large:text-left top-7 medium:top-0 relative medium:left-10">
            <div className="space-y-4">
              <h2
                className="font-primary text-white text-base large:text-lg px-3 py-1 w-fit rounded-md inline-block"
                style={{ backgroundColor: 'oklch(0.33 0.09 251.55)' }}
              >
                ABOUT ME
              </h2>
              <h1 className="text-white font-primary text-4xl large:text-[2.43rem] font-bold">
                I AM AVAILABLE FOR{' '}
                <span style={{ color: 'oklch(0.63 0.2 254.34)' }}>
                  UI UX DESIGN
                </span>{' '}
                PROJECTS
              </h1>
              <div className="font-primary large:text-lg text-md">
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
              <div className="flex flex-row medium:space-x-3 space-x-3 large:space-y-0 large:space-x-7 pb-5 medium:pb-0">
                <div className="p-4 bg-[oklch(0.33 0.09 251.55)/60] rounded-lg border border-neutral-400 text-white font-primary text-md">
                  <h1 className="text-3xl font-semibold">50+</h1>
                  <p>Projects</p>
                </div>
                <div className="p-4 bg-[oklch(0.33 0.09 251.55)/60] rounded-lg border border-neutral-400 text-white font-primary text-md">
                  <h1 className="text-3xl font-semibold">3+</h1>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            {/* SVG 2 (Right Circle) */}
            <div className="hidden medium:block">
              <img
                className="h-32 w-32 medium:max-lg:h-28 medium:max-lg:w-28 rounded-full animate-spin-slow absolute left-[550px] large:max-lg:left-[350px] large:top-6"
                src="https://janna-react.vercel.app/images/effect-2.svg"
                alt="Decorative SVG Effect 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMemock;