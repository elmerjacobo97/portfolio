import { createElement } from "react";
import { skillIcons } from "@/helpers";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  value: number;
}

interface SkillItemProps {
  skills: Skill[];
}

export function SkillItem({ skills }: SkillItemProps) {
  return (
    <div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-4 flex items-center rounded-lg border p-4 shadow-md transition-all bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-800 space-x-4 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex-shrink-0">
            {createElement(skillIcons[skill.name].icon as IconType, {
              size: 32,
              color: skillIcons[skill.name].color || "#f7df1e",
            })}
          </div>
          <div className="flex-grow">
            <p className="text-lg font-semibold">{skill.name}</p>
            <div className="h-2 overflow-hidden rounded-full bg-gray-300">
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
}
