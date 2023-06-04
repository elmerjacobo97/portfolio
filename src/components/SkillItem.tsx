import { createElement } from 'react';
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
  return (
    <div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center p-4 mb-4 space-x-4 transition-all rounded-lg shadow-md hover:scale-105 hover:shadow-xl"
        >
          <div className="flex-shrink-0">
            {createElement(skillIcons[skill.name].icon as IconType, {
              size: 32,
              color: skillIcons[skill.name].color || '#f7df1e',
            })}
          </div>
          <div className="flex-grow">
            <p className="text-lg font-semibold">{skill.name}</p>
            <div className="h-2 overflow-hidden bg-gray-300 rounded-full">
              <div
                className="h-full transition-all bg-success"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
