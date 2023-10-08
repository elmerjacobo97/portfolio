import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-20 transition-all bg-white dark:bg-gray-800 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-extrabold tracking-tighter text-center text-gray-800 dark:text-white md:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
          Sobre mí
        </span>
      </h1>
      <div className="max-w-5xl mx-auto mt-12">
        <div className="grid items-center justify-center grid-cols-1 gap-16 px-4 md:grid-cols-2 lg:gap-24">
          <div className="flex justify-center">
            <div className="p-4 transition-shadow duration-300 ease-in-out rounded-lg shadow-lg hover:shadow-2xl">
              <div className="aspect-w-2 aspect-h-3">
                <Image
                  src={'/images/web_developer.svg'}
                  alt={'Web Developer'}
                  width={600}
                  height={700}
                />
              </div>
            </div>
          </div>
          <div className="text-base leading-snug text-gray-800 dark:text-gray-200">
            <pre className="hidden min-w-full p-3 mb-4 text-center text-purple-700 bg-gray-200 rounded-lg shadow-inner lg:block dark:bg-gray-700 dark:text-purple-300">
              <code>{'<Elmer code={{ language: "JavaScript" }} />'}</code>
            </pre>
            <p>
              👨‍💻{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Desarrollador Full Stack
              </span>{' '}
              altamente especializado con más de 2 años de experiencia
              demostrada en la creación de soluciones web escalables y de alto
              rendimiento. Destaco en tecnologías modernas como{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                React
              </span>
              ,{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Angular
              </span>
              ,{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                TypeScript
              </span>{' '}
              y{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                JavaScript
              </span>
              . 🌐💻
            </p>
            <p className="mt-3">
              🔧 Domino con eficacia las tecnologías backend, incluyendo{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Node.js
              </span>
              ,{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Express
              </span>{' '}
              y bases de datos como{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                MySQL
              </span>{' '}
              y{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                MongoDB
              </span>
              . Tengo experiencia en el uso de ORMs como{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Prisma
              </span>{' '}
              y{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Mongoose
              </span>
              , lo que garantiza un modelado de datos eficiente y seguro. 📊🔒
            </p>
            <p className="mt-3">
              🎯 Siempre enfocado en la optimización y en seguir las mejores
              prácticas, ofrezco soluciones de alta calidad con interfaces de
              usuario intuitivas y eficientes. Soy proactivo y autodidacta,
              manteniéndome siempre actualizado en tecnologías emergentes. 🚀📚
            </p>
            <p className="mt-3">
              🤝 Estoy abierto a colaborar en proyectos ambiciosos que requieran
              habilidades tanto en frontend como en backend, con el objetivo de
              superar las expectativas y contribuir al éxito del equipo. 🎉🏆
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
