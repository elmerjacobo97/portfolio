import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="my-10">
      <h1 className="text-4xl md:text-6xl font-black text-center text-primary">Sobre mí</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 justify-center items-center mt-10">
        <div className="max-w-xl mx-auto">
          <div className="rounded-md hover:shadow-md border border-base-200 bg-base-100 p-2">
            <Image src={'/images/web_developer.svg'} alt={'Web Developer'} width={300} height={300} />
          </div>
        </div>
        <div className="max-w-xl mx-auto px-5 lg:p-0">
          <p className="text-base md:text-lg">Soy un desarrollador web con más de 2 años de experiencia en el desarrollo de aplicaciones web utilizando tecnologías emergentes como JavaScript, TypeScript, React y Angular.</p>
          <p className="text-base md:text-lg mt-4">También tengo experiencia en el desarrollo del lado del servidor utilizando Node.js y Express, y tengo habilidades en bases de datos relacionales como MySQL y bases de datos no relacionales como MongoDB y Firebase. Además, he trabajado con ORMs como Prisma y Mongoose para el modelado de datos.</p>
          <p className="text-base md:text-lg mt-4">Soy proactivo e investigativo, y siempre busco la solución óptima a los problemas de software manteniendo buenas prácticas de programación.</p>
          <p className="text-base md:text-lg mt-4">Me apasiona el desarrollo de software del lado del cliente y disfruto trabajando en proyectos que ponen a prueba mis habilidades y me permiten crear interfaces de usuario atractivas y altamente funcionales. Además, estoy en constante aprendizaje y mejora de mis habilidades para mantenerme actualizado en un campo en constante evolución.</p>
          <p className="text-base md:text-lg mt-4">Actualmente, estoy buscando oportunidades para trabajar en proyectos desafiantes en equipo donde pueda aportar mis habilidades y conocimientos tanto en el desarrollo del lado del cliente como en el del servidor.</p>
        </div>
      </div>
    </div>

  );
}
