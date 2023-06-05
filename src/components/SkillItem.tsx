import { createElement, useEffect, useRef } from 'react';
import { skillIcons } from '@/helpers';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  value: number;
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
          className="flex items-center p-4 mb-4 space-x-4 transition-all shadow-lg rounded-xl hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn"
        >
          <div className="flex-shrink-0">
            {createElement(skillIcons[skill.name].icon as IconType, {
              size: 32,
              color: skillIcons[skill.name].color || '#f7df1e',
            })}
          </div>
          <div className="flex-grow">
            <p className="text-lg font-medium">{skill.name}</p>
            <div className="h-2 overflow-hidden bg-gray-300 rounded-full">
              <div
                className="h-full transition-all bg-success animate-pulse"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
