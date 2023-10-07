import { createElement, useEffect, useRef } from 'react';
import { skillIcons } from '@/helpers';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  value: number;
  description: string; // Agrega esta línea
}
interface SkillItemProps {
  skills: Skill[];
}

export const SkillItem = ({ skills }: SkillItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('scrollreveal').then((ScrollReveal) => {
      if (containerRef.current) {
        const sr = ScrollReveal.default();

        const elements = Array.from(
          containerRef.current.children
        ) as HTMLElement[];

        elements.forEach((element, index) => {
          sr.reveal(element, {
            delay: index * 200,
            duration: 500,
            distance: '50px',
            easing: 'ease-out',
            origin: 'bottom',
          });
        });
      }
    });
  }, []);

  return (
    <div ref={containerRef}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center p-4 mb-4 space-x-4 transition-transform duration-300 ease-in-out bg-white shadow-md dark:shadow-lg dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn"
        >
          <div className="flex-shrink-0">
            {createElement(skillIcons[skill.name].icon as IconType, {
              size: 32,
              color: skillIcons[skill.name].color || '#f7df1e',
            })}
          </div>
          <div className="flex-grow">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
            <div className="relative h-2 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-700">
              <div
                className="absolute h-full transition-all bg-green-400 dark:bg-green-500 animate-pulse"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 ">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
