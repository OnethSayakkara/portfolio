import React, { useRef, useState, useEffect } from 'react';
import project1 from '../assets/images/project1.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPlus, FiX } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

function RecentProjects() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const projectImages = [project1, project3, project4, project5];

  const projectDetails = [
    {
      title: "Responsive Salon Website with Booking and E-Commerce",
      description: "Developed a full-featured, responsive salon website as my final Higher Diploma project.Key features include appointment booking, a cosmetic product store, Stripe payment integration, and a secure admin panel.Built using React, Tailwind CSS, and JWT authentication, the system ensures a seamless, secure experience for both customers and administrators across all devices.Spring Boot and MySQL backend for efficient data management.",
      frontend: "REACT, TAILWIND CSS, JAVA SCRIPT",
      backend: "SPRING BOOT (JAVA), MYSQL",
      gitlink: "https://github.com/OnethSayakkara/FInal-project"
    },
    {
      title: "E-Commerce Platform for Local Retail",
      description: "An e-commerce platform designed for a local retail business, featuring product listings, a shopping cart, and secure payment integration.",
      frontend: "NEXT.JS",
      backend: "NODE.JS, MONGODB",
      gitlink: ""
    },
    {
      title: "Portfolio Website for Freelance Photographer",
      description: "A visually stunning portfolio website for a freelance photographer, with a gallery, booking system, and responsive design for all devices.",
      frontend: "HTML, CSS, JAVASCRIPT",
      backend: "NONE",
      gitlink: ""
    },
    {
      title: "Dashboard for Business Analytics",
      description: "A business analytics dashboard providing real-time data visualization, user management, and reporting tools for small businesses.",
      frontend: "VUE.JS",
      backend: "EXPRESS, POSTGRESQL",
      gitlink: ""
    },
  ];

  const getCardWidth = () => {
    return window.innerWidth < 400 ? 280 + 5 : 340 + 5; // 280px for <400px, 340px for ≥400px + gap
  };

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
    const cardWidth = getCardWidth();
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    const slider = sliderRef.current;
    const cardWidth = getCardWidth();
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

    const updateCardWidth = () => {
      const cardWidth = getCardWidth();
      setActiveIndex(Math.round(slider.scrollLeft / cardWidth));
    };
    window.addEventListener('resize', updateCardWidth);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  return (
    <section
      className="min-h-[500px] flex justify-center py-20 relative px-4 sm:px-6 lg:px-8"
      style={{
        background: `linear-gradient(to right, oklch(0.29 0.07 249.18) 30%, oklch(0.21 0.05 251.41))`,
      }}
    >
      <div className="w-auto max-w-full">
        <h2
          className="font-primary text-white text-base px-3 py-1 w-fit rounded-md tracking-widest mb-1 mt-7"
          style={{ backgroundColor: 'oklch(0.33 0.09 251.55)' }}
        >
          MY WORK
        </h2>
        <h1 className="text-white font-primary text-2xl sm:text-3xl lg:text-[2.5rem] font-bold mb-6">RECENT PROJECTS</h1>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-snap-x-mandatory gap-5 pb-4 w-full  hide-scrollbar font-primary"
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[350px] xs:min-w-[340px] h-[370px] bg-white rounded-lg shadow-md flex flex-col justify-between p-4 scroll-snap-align-start group"
              >
                <div>
                  <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110 transform-origin-center"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-2xl"
                      onClick={() => handleCardSelect(index)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <h3 className="text-black text-lg font-semibold mt-5 -mb-2">Website Design</h3>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm relative">Web Design, App Design</p>
                    <button
                      className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-black flex items-center justify-center border-2 border-black"
                      onClick={() => handleCardSelect(index)}
                    >
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1200px] h-auto max-h-[90vh] bg-white p-4 sm:p-6 lg:p-8 shadow-lg z-20 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl z-30"
              onClick={closePanel}
            >
              <FiX />
            </button>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <img
                src={projectImages[selectedCard]}
                alt={`Project ${selectedCard + 1}`}
                className="w-full  sm:max-w-[600px] lg:max-w-[650px] h-[250px] sm:h-auto object-cover"
              />
              <div className="flex-1 pr-0 lg:pr-6 font-primary space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 mt-7 sm:mt-0">{projectDetails[selectedCard].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-md whitespace-pre-line">
                  {projectDetails[selectedCard].description}
                </p>
                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                  <p><span className="font-medium">Type:</span> Website</p>
                  <p><span className="font-medium">Front end:</span> {projectDetails[selectedCard].frontend}</p>
                  <p><span className="font-medium">Back end:</span> {projectDetails[selectedCard].backend}</p>
                  {projectDetails[selectedCard].gitlink && (
                    <div className="flex flex-row items-center gap-2 hover:text-slate-800 hover:font-medium">
                      <a
                        href={projectDetails[selectedCard].gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-base sm:text-lg"
                      >
                        GitHub
                      </a>
                      <MdArrowOutward className="text-blue-500" />
                    </div>
                  )}
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