'use client';
import { useEffect, useState } from 'react';
import { RiCopyrightLine } from 'react-icons/ri';
import { animations, getCurrentYear, quotes } from '../helpers';
import { FaMapMarkerAlt, FaMailBulk } from 'react-icons/fa';

export const Footer = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);
  const currentYear = getCurrentYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const currentAnimation = animations[animationIndex];
  const currentQuote = quotes[quoteIndex];
  return (
    <footer className="flex flex-col items-center justify-center w-full py-6 text-gray-500 bg-slate-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col justify-between w-full px-10 space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-10 md:space-x-20">
        <div className="flex-col items-center justify-center text-center md:flex">
          <div className="flex items-center justify-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <strong>Ubicación</strong>
          </div>
          Trujillo, Perú
        </div>
        <div
          className={`hidden mb-4 italic text-center md:block animate__animated ${currentAnimation}`}
          key={quoteIndex}
        >
          <div className="flex flex-wrap items-center justify-center max-w-[80%] mx-auto">
            <span className="flex-none">&ldquo;{currentQuote.text}&rdquo;</span>
            <span className="flex-shrink-0 ml-2">- {currentQuote.author}</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <FaMailBulk className="mr-2" />
            <strong>Contacto</strong>
          </div>
          <div className="flex items-center justify-center">
            ¿Tienes un proyecto en mente? {''}
            <a
              href="mailto:ejacobotiniano@gmail.com"
              className="ml-2 text-blue-500 dark:text-blue-400 link-hover"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 border-t border-gray-300 dark:border-gray-700"></div>
      <div className="flex flex-col items-center mt-4 text-center md:flex-row">
        <div className="flex items-center justify-center gap-1">
          <RiCopyrightLine
            className="text-gray-500 dark:text-gray-300"
            size={20}
          />
          {currentYear} Elmer Jacobo.
        </div>
        <div className="md:ml-1">Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};
