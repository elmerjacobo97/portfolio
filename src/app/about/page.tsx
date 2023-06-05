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
              Soy un desarrollador web con más de 2 años de experiencia en el
              desarrollo de aplicaciones web utilizando tecnologías emergentes
              como JavaScript, TypeScript, React y Angular.
            </p>
            <p className="mt-4 text-base">
              También tengo experiencia en el desarrollo del lado del servidor
              utilizando Node.js y Express, y tengo habilidades en bases de
              datos relacionales como MySQL y bases de datos no relacionales
              como MongoDB y Firebase. Además, he trabajado con ORMs como Prisma
              y Mongoose para el modelado de datos.
            </p>
            <p className="mt-4 text-base">
              Soy proactivo e investigador, y siempre busco la solución óptima a
              los problemas de software manteniendo buenas prácticas de
              programación.
            </p>
            <p className="mt-4 text-base">
              Me apasiona el desarrollo de software del lado del cliente y
              disfruto trabajando en proyectos que ponen a prueba mis
              habilidades y me permiten crear interfaces de usuario atractivas y
              altamente funcionales. Además, estoy en constante aprendizaje y
              mejora de mis habilidades para mantenerme actualizado en un campo
              en constante evolución.
            </p>
            <p className="mt-4 text-base">
              Actualmente, estoy buscando oportunidades para trabajar en
              proyectos desafiantes en equipo donde pueda aportar mis
              habilidades y conocimientos tanto en el desarrollo del lado del
              cliente como en el del servidor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
