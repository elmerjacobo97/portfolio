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
  SiFigma,
  SiPostgresql,
  SiAstro,
  SiSvelte,
  SiFastify,
  SiSwift,
  SiKotlin,
  SiVite,
} from 'react-icons/si';
import { FaAngular, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';

interface SkillIcons {
  [key: string]: { icon: IconType; color: string };
}

export const texts = [
  'Desarrollo interfaces de usuario',
  'Creo lógica de servidor',
  'Trabajo en proyectos FullStack',
  'Desarrollo aplicaciones móviles',
];

export const designSkills = [
  { name: 'HTML', value: 90, description: 'Estructura de páginas web.' },
  { name: 'CSS', value: 75, description: 'Estilo y diseño web.' },
  { name: 'Bootstrap', value: 80, description: 'Framework CSS.' },
  { name: 'Tailwind CSS', value: 80, description: 'Utilidades CSS.' },
  { name: 'Material UI', value: 60, description: 'UI React Framework.' },
  { name: 'Sass', value: 60, description: 'Preprocesador CSS.' },
  { name: 'Figma', value: 55, description: 'Diseño de interfaz.' },
];

export const frontendSkills = [
  { name: 'JavaScript', value: 80, description: 'Lenguaje web.' },
  { name: 'TypeScript', value: 70, description: 'JS tipado.' },
  { name: 'React', value: 90, description: 'Librería UI.' },
  { name: 'Next.js', value: 90, description: 'Framework React.' },
  { name: 'Angular', value: 60, description: 'Framework Google.' },
  { name: 'Astro', value: 65, description: 'Renderizado estático.' },
  { name: 'Svelte', value: 30, description: 'Compilador de UI.' },
];

export const backendSkills = [
  { name: 'Node.js', value: 75, description: 'JS en servidor.' },
  { name: 'Express', value: 70, description: 'Framework Node.js.' },
  { name: 'Nest.js', value: 40, description: 'Framework Node.js.' },
  { name: 'PHP', value: 40, description: 'Script en servidor.' },
  { name: 'Laravel', value: 40, description: 'Framework PHP.' },
  { name: 'Django', value: 15, description: 'Framework Python.' },
  { name: 'Fastify', value: 15, description: 'Rápido framework Node.js.' },
];

export const mobileSkills = [
  { name: 'React Native', value: 80, description: 'React para móviles.' },
  { name: 'Flutter', value: 50, description: 'SDK móvil.' },
  { name: 'Ionic', value: 30, description: 'Desarrollo multiplataforma.' },
  { name: 'Swift', value: 10, description: 'Desarrollo iOS nativo.' },
  { name: 'Kotlin', value: 12, description: 'Desarrollo Android nativo.' },
];

export const databaseSkills = [
  { name: 'MySQL', value: 80, description: 'DB relacional.' },
  { name: 'SQLite', value: 70, description: 'DB embebida.' },
  { name: 'MongoDB', value: 70, description: 'DB NoSQL.' },
  { name: 'Firebase', value: 75, description: 'Backend como servicio.' },
  { name: 'Microsoft SQL Server', value: 35, description: 'DB relacional.' },
  { name: 'PostgreSQL', value: 60, description: 'DB relacional.' },
];

export const otherSkills = [
  { name: 'Mongoose', value: 70, description: 'ORM para MongoDB.' },
  { name: 'Sequelize', value: 50, description: 'ORM para SQL.' },
  { name: 'Docker', value: 70, description: 'Contenedorización.' },
  { name: 'Git', value: 80, description: 'Control de versiones.' },
  { name: 'Webpack', value: 60, description: 'Empaquetador.' },
  { name: 'Vite', value: 65, description: 'Empaquetador moderno.' },
];

export const skillIcons: SkillIcons = {
  Figma: { icon: SiFigma, color: '#F24E1E' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
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
  Astro: { icon: SiAstro, color: '#F5A623' },
  Svelte: { icon: SiSvelte, color: '#FF3E00' },
  Fastify: { icon: SiFastify, color: '#1A1A1A' },
  Swift: { icon: SiSwift, color: '#F05138' },
  Kotlin: { icon: SiKotlin, color: '#0095D5' },
  Vite: { icon: SiVite, color: '#646CFF' },
};

export function getCurrentYear() {
  return new Date().getFullYear();
}

export const quotes = [
  {
    text: 'La innovación distingue a un líder de un seguidor.',
    author: 'Steve Jobs',
  },
  {
    text: 'El futuro pertenece a quienes creen en la belleza de sus sueños.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'El único modo de hacer un gran trabajo es amar lo que haces.',
    author: 'Steve Jobs',
  },
  {
    text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.',
    author: 'John Lennon',
  },
  {
    text: 'La mejor forma de predecir el futuro es inventándolo.',
    author: 'Alan Kay',
  },
  {
    text: 'Primero resuelve el problema. Luego, escribe el código.',
    author: 'John Johnson',
  },
  {
    text: 'La simplicidad es la última sofisticación.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'Todo debería hacerse tan simple como sea posible, pero no más simple.',
    author: 'Albert Einstein',
  },
  {
    text: 'La mejor manera de prever el futuro es implementarlo.',
    author: 'Alan Curtis Kay',
  },
  {
    text: 'Hablar es barato. Muéstrame el código.',
    author: 'Linus Torvalds',
  },
  {
    text: 'Programar no es una habilidad para escribir, es una habilidad para resolver problemas.',
    author: 'Richard Pattis',
  },
  {
    text: 'La verdad puede ser declarada solo por, no de, una máquina programable.',
    author: 'Alan Perlis',
  },
  {
    text: 'El código es como el humor. Cuando lo tienes que explicar, es malo.',
    author: 'Cory House',
  },
  {
    text: 'El código es poesía.',
    author: 'WordPress',
  },
  {
    text: 'La pregunta no es si vas a tener un problema, sino cuándo lo tendrás.',
    author: 'Kevin Systrom',
  },
  {
    text: 'Nunca confíes en un ordenador que no puedas lanzar por una ventana.',
    author: 'Steve Wozniak',
  },
  {
    text: 'Los errores deberían costar caro para que no se cometan de nuevo.',
    author: 'Thomas J. Watson',
  },
  {
    text: 'La gente piensa que la informática es la ciencia de los ordenadores. Pero en realidad es la ciencia de la solución de problemas.',
    author: 'H. Gilbert',
  },
  {
    text: 'Hazlo, arréglalo, intenta hacerlo otra vez.',
    author: 'Linda Rising',
  },
  {
    text: 'Sólo los tontos usan la palabra "imposible".',
    author: 'Michio Kaku',
  },
];

export const animations = [
  'animate__fadeIn',
  'animate__fadeInUp',
  'animate__fadeInDown',
  'animate__lightSpeedInRight',
  'animate__lightSpeedInLeft',
  'animate__flipInX',
  'animate__flipInY',
  'animate__pulse',
  'animate__flash',
  'animate__bounce',
];
