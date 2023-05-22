import React from 'react';
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiLaravel,
  SiDocker,
  SiGit,
  SiSequelize,
  SiSqlite,
  SiTailwindcss,
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/all';

interface SkillIcons {
  [key: string]: JSX.Element;
}

export default function Skills  () {
  const frontendSkills = [
    { name: 'JavaScript', value: 80 },
    { name: 'TypeScript', value: 70 },
    { name: 'React', value: 90 },
    { name: 'Next.js', value: 90 },
    { name: 'Angular', value: 60 },
    { name: 'Tailwind CSS', value: 70 },
    { name: 'Vue.js', value: 70 },
  ];

  const backendSkills = [
    { name: 'Node.js', value: 75 },
    { name: 'Express', value: 70 },
    { name: 'Nest.js', value: 80 },
    { name: 'Laravel', value: 80 },
    { name: 'React Native', value: 75 },
  ];

  const databaseSkills = [
    { name: 'MySQL', value: 80 },
    { name: 'SQLite', value: 70 },
    { name: 'MongoDB', value: 70 },
    { name: 'Firebase', value: 75 },
  ];

  const otherSkills = [
    { name: 'Mongoose', value: 70 },
    { name: 'Sequelize', value: 50 },
    { name: 'Docker', value: 70 },
    { name: 'Git', value: 80 },
  ];

  const skillIcons: SkillIcons = {
    JavaScript: <IoLogoJavascript size={32} color="#f7df1e" />,
    TypeScript: <SiTypescript size={32} color="#3178c6" />,
    React: <FaReact size={32} color="#61DAFB" />,
    'Next.js': <SiNextdotjs size={32} color="#000" />,
    Angular: <FaAngular size={32} color="#DD0031" />,
    'Node.js': <FaNodeJs size={32} color="#44843D" />,
    Express: <SiExpress size={32} color="#57A143" />,
    'Nest.js': <SiNestjs size={32} color="#E0234E" />,
    Laravel: <SiLaravel size={32} color="#FF2D20" />,
    MySQL: <SiMysql size={32} color="#007BFF" />,
    SQLite: <SiSqlite size={32} color="#003B57" />,
    MongoDB: <SiMongodb size={32} color="#47A248" />,
    Firebase: <SiFirebase size={32} color="#FFCA28" />,
    Mongoose: <FaDatabase size={32} color="#425A70" />,
    Sequelize: <SiSequelize size={32} color="#00B4D8" />,
    Docker: <SiDocker size={32} color="#0DB7ED" />,
    Git: <SiGit size={32} color="#F05032" />,
    'Tailwind CSS': <SiTailwindcss size={32} color="#38B2AC" />,
    'Vue.js': <IoLogoVue size={32} color="#4FC08D" />,
    'React Native': <TbBrandReactNative size={32} color="#61DBFB" />,
  };

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-center text-4xl font-black text-primary md:text-6xl">
          Mis Habilidades
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Frontend</h2>
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="mb-4 flex transform items-center rounded-lg border p-4 shadow-md transition-all bg-base-200 border-base-300 space-x-4 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex-shrink-0">{skillIcons[skill.name]}</div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-300">
                    <div
                      className="h-full transition-all bg-accent"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Backend</h2>
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="mb-4 flex transform items-center rounded-lg p-4 shadow-md transition-all bg-base-200 space-x-4 hover:scale-105 hover:shadow-xl"
              >
                <div>{skillIcons[skill.name]}</div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-300">
                    <div
                      className="h-full transition-all bg-accent"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Base de Datos</h2>
            {databaseSkills.map((skill, index) => (
              <div
                key={index}
                className="mb-4 flex transform items-center rounded-lg bg-base-200 p-4 shadow-md transition-all space-x-4 hover:scale-105 hover:shadow-xl"
              >
                <div>{skillIcons[skill.name]}</div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-300">
                    <div
                      className="h-full bg-accent transition-all"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Otros</h2>
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="mb-4 flex transform items-center rounded-lg bg-base-200 p-4 shadow-md transition-all space-x-4 hover:scale-105 hover:shadow-xl"
              >
                <div>{skillIcons[skill.name]}</div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-300">
                    <div
                      className="h-full bg-accent transition-all"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

