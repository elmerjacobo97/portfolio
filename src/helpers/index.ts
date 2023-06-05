import { IconType } from 'react-icons';
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiSequelize,
  SiSqlite,
  SiTypescript,
  SiIonic,
  SiMicrosoftsqlserver,
  SiDjango,
  SiWebpack,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialdesign,
  SiSass,
} from 'react-icons/si';
import { FaAngular, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';

interface SkillIcons {
  [key: string]: { icon: IconType; color: string };
}

export const texts = [
  'Frontend Developer',
  'Backend Developer',
  'FullStack Developer',
  'Mobile Developer',
];

export const designSkills = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 75 },
  { name: 'Bootstrap', value: 80 },
  { name: 'Tailwind CSS', value: 80 },
  { name: 'Material UI', value: 60 },
  { name: 'Sass', value: 60 },
];

export const frontendSkills = [
  { name: 'JavaScript', value: 80 },
  { name: 'TypeScript', value: 70 },
  { name: 'React', value: 90 },
  { name: 'Next.js', value: 90 },
  { name: 'Angular', value: 60 },
  { name: 'Vue.js', value: 70 },
];

export const backendSkills = [
  { name: 'Node.js', value: 75 },
  { name: 'Express', value: 70 },
  { name: 'Nest.js', value: 80 },
  { name: 'PHP', value: 40 },
  { name: 'Laravel', value: 80 },
  { name: 'Django', value: 30 },
];

export const mobileSkills = [
  { name: 'Flutter', value: 70 },
  { name: 'React Native', value: 80 },
  { name: 'Ionic', value: 30 },
];

export const databaseSkills = [
  { name: 'MySQL', value: 80 },
  { name: 'SQLite', value: 70 },
  { name: 'MongoDB', value: 70 },
  { name: 'Firebase', value: 75 },
  { name: 'Microsoft SQL Server', value: 35 },
];

export const otherSkills = [
  { name: 'Mongoose', value: 70 },
  { name: 'Sequelize', value: 50 },
  { name: 'Docker', value: 70 },
  { name: 'Git', value: 80 },
  { name: 'Webpack', value: 60 },
];

export const skillIcons: SkillIcons = {
  JavaScript: { icon: IoLogoJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#007ACC' },
  React: { icon: FaReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000' },
  Angular: { icon: FaAngular, color: '#DD0031' },
  'Node.js': { icon: FaNodeJs, color: '#3C873A' },
  Express: { icon: SiExpress, color: '#3C873A' },
  'Nest.js': { icon: SiNestjs, color: '#E0234E' },
  PHP: { icon: SiPhp, color: '#4F5D95' },
  Laravel: { icon: SiLaravel, color: '#FF2D20' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  SQLite: { icon: SiSqlite, color: '#003B57' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
  Mongoose: { icon: FaDatabase, color: '#47A248' },
  Sequelize: { icon: SiSequelize, color: '#52B0E7' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Git: { icon: SiGit, color: '#F05032' },
  'Vue.js': { icon: IoLogoVue, color: '#4FC08D' },
  'React Native': { icon: TbBrandReactNative, color: '#61DAFB' },
  Flutter: { icon: SiFlutter, color: '#3B82F6' },
  Ionic: { icon: SiIonic, color: '#176BFF' },
  'Microsoft SQL Server': { icon: SiMicrosoftsqlserver, color: '#CC2927' },
  Django: { icon: SiDjango, color: '#092E20' },
  Webpack: { icon: SiWebpack, color: '#8DD6F9' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss3, color: '#2965F1' },
  Bootstrap: { icon: SiBootstrap, color: '#563D7C' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#00ADB5' },
  'Material UI': { icon: SiMaterialdesign, color: '#673AB7' },
  Sass: { icon: SiSass, color: '#CC6699' },
};

export function getCurrentYear() {
  return new Date().getFullYear();
}
