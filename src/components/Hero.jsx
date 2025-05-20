import React, { useState, useEffect } from 'react';
import hbanner from '../assets/images/home-banner.png';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero() {
  const words = ['VELOPER', 'SIGNER'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 100 : 200;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <div className="w-full  large:h-[677px] flex items-center justify-center">
      <div className="flex flex-col medium:flex-row justify-center items-center w-full px-4 medium:px-9 py-8 medium:-mt-10">
        <div className="space-y-4 sm:px-10 ">
          <h2
            className="font-primary text-white text-base px-3 py-1 w-fit rounded-md"
            style={{ backgroundColor: 'oklch(0.33 0.09 251.55)' }}
          >
            ONETH SAYAKKARA
          </h2>
          <h1 className="text-white text-4xl large:text-7xl md:text-5xl font-semibold font-primary whitespace-nowrap">
            HAY! I'M ONETH
          </h1>
          <h1
            className="text-4xl font-semibold font-primary md:text-5xl flex large:text-7xl items-center whitespace-nowrap"
            style={{ color: 'oklch(0.63 0.2 254.34)' }}
          >
            I'M A DE
            <span className="relative inline-block min-h-[1em]">
              {displayedText}
              <span
                className="absolute h-8 phone:h-16 phone:w-2 w-1 animate-blink"
                style={{
                  backgroundColor: 'oklch(0.63 0.2 254.34)',
                  left: `${displayedText.length * 0.93 || 0.1}ch`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              ></span>
            </span>
          </h1>
          <div className="space-y-6">
            <p className="font-primary text-lg text-white">
              Undergraduate in Computing and Software Engineering with a passion for building innovative solutions
            </p>
            <div className="flex flex-col phone:flex-row space-x-4">
              <button className="hover:bg-black hover:border-2 border-2 border-transparent hover:border-white bg-blue-500 rounded-full px-6 py-3 font-semibold text-white transition-all">
                DOWNLOAD CV
              </button>
              <div className="phone:space-x-3 space-x-1 items-center justify-center text-center p-3 phone:p-0 text-xl text-white">
                <button className="px-4 border-2 border-white py-4 rounded-full bg-blue-500">
                  <FaLinkedinIn />
                </button>
                <button className="px-4 border-2 border-white py-4 rounded-full bg-emerald-500">
                  <FaGithub />
                </button>
                <button className="px-4 border-2 border-white py-4 rounded-full bg-amber-600">
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 phone:w-[546px] phone:h-[581px] w-[375px] h-[373px]">
          <img
            className="object-contain"
            src={hbanner}
            alt="Home banner"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;