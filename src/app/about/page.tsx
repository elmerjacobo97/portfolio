import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-black text-center md:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
          Sobre mí
        </span>
      </h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center justify-center grid-cols-1 gap-10 px-4 mt-10 md:grid-cols-2">
          <div className="lg:max-w-xl">
            <div className="p-2 rounded-md shadow-md">
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
          <div>
            <p className="text-base">
              Desarrollador Full Stack con más de 2 años de experiencia,
              especializado en tecnologías emergentes como JavaScript,
              TypeScript, React y Angular para el desarrollo web.
            </p>
            <p className="mt-4 text-base">
              En el backend, utilizo Node.js y Express, y manejo bases de datos
              como MySQL, MongoDB y Firebase. También tengo experiencia con ORMs
              como Prisma y Mongoose para el modelado eficiente de datos.
            </p>
            <p className="mt-4 text-base">
              Soy proactivo y siempre busco soluciones óptimas, manteniendo
              buenas prácticas. Disfruto creando interfaces de usuario
              atractivas y funcionales y me mantengo en constante aprendizaje en
              este campo en rápida evolución.
            </p>
            <p className="mt-4 text-base">
              Actualmente, busco oportunidades para colaborar en proyectos
              desafiantes donde pueda aportar mis habilidades en desarrollo
              frontend y backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
