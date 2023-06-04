import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-20 bg-white dark:bg-slate-800">
      <h1 className="text-4xl md:text-6xl font-black text-center text-primary">
        Sobre mí
      </h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mt-10 px-4">
          <div className="lg:max-w-xl">
            <div className="rounded-md overflow-hidden hover:shadow-md border dark:border-none dark:bg-slate-800 p-2">
              <div className="aspect-w-2 aspect-h-3">
                <Image
                  src={"/images/web_developer.svg"}
                  alt={"Web Developer"}
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
            <p className="text-base mt-4">
              También tengo experiencia en el desarrollo del lado del servidor
              utilizando Node.js y Express, y tengo habilidades en bases de
              datos relacionales como MySQL y bases de datos no relacionales
              como MongoDB y Firebase. Además, he trabajado con ORMs como Prisma
              y Mongoose para el modelado de datos.
            </p>
            <p className="text-base mt-4">
              Soy proactivo e investigativo, y siempre busco la solución óptima
              a los problemas de software manteniendo buenas prácticas de
              programación.
            </p>
            <p className="text-base mt-4">
              Me apasiona el desarrollo de software del lado del cliente y
              disfruto trabajando en proyectos que ponen a prueba mis
              habilidades y me permiten crear interfaces de usuario atractivas y
              altamente funcionales. Además, estoy en constante aprendizaje y
              mejora de mis habilidades para mantenerme actualizado en un campo
              en constante evolución.
            </p>
            <p className="text-base mt-4">
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
