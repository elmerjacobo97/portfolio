import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { HiCode, HiExternalLink } from 'react-icons/hi';
import ScrollReveal from 'scrollreveal';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  technologies: string;
  seeCode: string;
  visiteSite: string;
}

export const CardProject = ({
  imageSrc,
  imageAlt,
  title,
  description,
  technologies,
  seeCode,
  visiteSite,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        if (cardRef.current) {
          sr.reveal(cardRef.current, {
            delay: 200,
            distance: '50px',
            duration: 500,
            easing: 'ease-out',
            origin: 'bottom',
          });
        }
      });
    }
  }, []);

  // Convertir la cadena de tecnologías en un array
  const techArray = technologies.split(', ');

  return (
    <div
      className="transition-all duration-300 ease-in-out rounded-lg shadow-lg dark:bg-slate-800 card card-compact hover:shadow-2xl animate__animated animate__fadeIn"
      ref={cardRef}
    >
      <figure className="relative overflow-hidden rounded-t-lg">
        <div
          className={`w-full  bg-gray-300 dark:bg-gray-700  animate-pulse absolute inset-0 z-10 ${
            !isLoading && 'hidden'
          }`}
        ></div>
        <Image
          src={imageSrc}
          width={500}
          height={550}
          alt={imageAlt}
          className="relative z-0"
          onLoad={() => {
            setTimeout(() => {
              setIsLoading(false);
            }, 3000);
          }}
        />
      </figure>
      <div className="flex flex-col justify-between p-4 card-body">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 card-title">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
          <h2 className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Tecnologías
          </h2>
          <div className="flex flex-wrap mt-2">
            {techArray.map((tech, index) => (
              <span
                key={index}
                className="items-center px-2 py-1 mb-2 mr-2 text-gray-600 bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <a
            className="flex items-center px-3 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 dark:hover:bg-green-800"
            href={seeCode}
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiCode size={20} className="mr-1" />
            Ver código
          </a>
          <a
            className="flex items-center px-3 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800"
            href={visiteSite}
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiExternalLink size={20} className="mr-1" />
            Visitar sitio
          </a>
        </div>
      </div>
    </div>
  );
};
