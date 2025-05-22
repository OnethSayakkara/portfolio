import React, { useRef, useState, useEffect } from 'react';
import project1 from '../assets/images/project1.png';
import project5 from '../assets/images/project5.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPlus, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


function RecentProjects() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const projectImages = [project1, project3, project4, project5];

  const projectDetails = [
    {
      title: "Website Design for Marketing Agency Startup",
      description: "Developed a full-featured, responsive salon website as my final Higher Diploma project. Key features include appointment booking, a cosmetic product store, Stripe payment integration, and a secure admin panel. Built using React, Tailwind CSS, and JWT authentication, the system ensures a seamless, secure experience for both customers and administrators across all devices.",
    frontend: "REACT, TAILWIND CSS, JAVA SCRIPT",
    backend: "SPRING BOOT (JAVA), MYSQL",
    },
    {
      title: "E-Commerce Platform for Local Retail",
      description: "An e-commerce platform designed for a local retail business, featuring product listings, a shopping cart, and secure payment integration.",
      languages: "NEXT.JS, NODE.JS, MONGODB",
    },
    {
      title: "Portfolio Website for Freelance Photographer",
      description: "A visually stunning portfolio website for a freelance photographer, with a gallery, booking system, and responsive design for all devices.",
      languages: "HTML, CSS, JAVASCRIPT",
    },
    {
      title: "Dashboard for Business Analytics",
      description: "A business analytics dashboard providing real-time data visualization, user management, and reporting tools for small businesses.",
      languages: "VUE.JS, EXPRESS, POSTGRESQL",
    },
  ];

  const handleDragStart = (e) => {
    const slider = sliderRef.current;
    let startX = e.pageX || e.touches?.[0].pageX;
    let scrollLeft = slider.scrollLeft;

    const handleDragMove = (moveEvent) => {
      const x = moveEvent.pageX || moveEvent.touches?.[0].pageX;
      const walk = (x - startX) * 2; // Adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('touchend', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove, { passive: true });
    document.addEventListener('touchend', handleDragEnd);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    const scrollLeft = slider.scrollLeft;
    const cardWidth = 380 + 5; // Updated card width + gap (gap-5)
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    const slider = sliderRef.current;
    const cardWidth = 380 + 5; // Updated card width + gap (gap-5)
    slider.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const closePanel = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="min-h-[500px] flex justify-end py-20 relative"
      style={{
        background: `linear-gradient(to right, oklch(0.29 0.07 249.18) 30%, oklch(0.21 0.05 251.41))`,
      }}
    >
      <div className="w-[1400px]">
        <h2
          className="font-primary text-white text-base px-3 py-1 w-fit rounded-md tracking-widest mb-1 mt-7"
          style={{ backgroundColor: 'oklch(0.33 0.09 251.55)' }}
        >
          MY WORK
        </h2>
        <h1 className="text-white font-primary text-[2.5rem] font-bold mb-6">RECENT PROJECT</h1>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-snap-x-mandatory gap-5 pb-4 w-[1400px] hide-scrollbar font-primary"
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {/* Card 1 */}
            <div className="min-w-[380px] h-[370px] bg-white rounded-lg shadow-md flex flex-col justify-between p-4 scroll-snap-align-start group">
              <div>
                <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                  <img
                    src={project1}
                    alt="Project 1"
                    className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110 transform-origin-center"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-2xl">
                    <FiPlus />
                  </button>
                </div>
                <h3 className="text-black text-lg font-semibold mt-5 -mb-2">Website Design</h3>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-gray-600 text-sm relative">Web Design, App Design</p>
                  <button
                    className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-black flex items-center justify-center border-2 border-black"
                    onClick={() => handleCardSelect(0)}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="min-w-[380px] h-[370px] bg-white rounded-lg shadow-md flex flex-col justify-between p-4 scroll-snap-align-start group">
              <div>
                <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                  <img
                    src={project3}
                    alt="Project 2"
                    className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110 transform-origin-center"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-2xl">
                    <FiPlus />
                  </button>
                </div>
                <h3 className="text-black text-lg font-semibold mt-5 -mb-2">Website Design</h3>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-gray-600 text-sm relative">Web Design, App Design</p>
                  <button
                    className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-black flex items-center justify-center border-2 border-black"
                    onClick={() => handleCardSelect(1)}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="min-w-[380px] h-[370px] bg-white rounded-lg shadow-md flex flex-col justify-between p-4 scroll-snap-align-start group">
              <div>
                <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                  <img
                    src={project4}
                    alt="Project 3"
                    className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110 transform-origin-center"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-2xl">
                    <FiPlus />
                  </button>
                </div>
                <h3 className="text-black text-lg font-semibold mt-5 -mb-2">Website Design</h3>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-gray-600 text-sm relative">Web Design, App Design</p>
                  <button
                    className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-black flex items-center justify-center border-2 border-black"
                    onClick={() => handleCardSelect(2)}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 (Half Visible) */}
            <div className="min-w-[380px] h-[370px] bg-white rounded-lg shadow-md flex flex-col justify-between p-4 scroll-snap-align-start group">
              <div>
                <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                  <img
                    src={project5}
                    alt="Project 4"
                    className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110 transform-origin-center"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-2xl">
                    <FiPlus />
                  </button>
                </div>
                <h3 className="text-black text-lg font-semibold mt-5 -mb-2">Website Design</h3>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-gray-600 text-sm relative">Web Design, App Design</p>
                  <button
                    className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-black flex items-center justify-center border-2 border-black"
                    onClick={() => handleCardSelect(3)}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-500 w-5 h-3 border border-white'
                    : 'border border-white bg-transparent'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
        {/* Background Overlay */}
        {selectedCard !== null && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-lg z-10"></div>
        )}
        {/* Detail Panel */}
        {selectedCard !== null && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[540px] bg-white p-8 shadow-lg z-20 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl z-30"
              onClick={closePanel}
            >
              <FiX />
            </button>
            <div className="flex flex-row gap-6">
              <img
                src={projectImages[selectedCard]}
                alt={`Project ${selectedCard + 1}`}
                className="w-[650px] h-auto object-cover"
              />
              <div className="flex-1 pr-6 font-primary">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{projectDetails[selectedCard].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-md">
                  {projectDetails[selectedCard].description}
                </p>
                <div className="space-y-4 text-gray-700 text-base relative">
                  <p><span className="font-medium">Type:</span>Website</p>
                  <p><span className="font-medium">Front end:</span> {projectDetails[selectedCard].frontend}</p>
                  <p><span className="font-medium">Back end:</span> {projectDetails[selectedCard].backend}</p>
                  <button className='text-4xl'><FaGithub/></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentProjects;