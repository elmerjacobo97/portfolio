import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="mt-10 px-5">
      <h1 className="text-center text-4xl font-black text-primary md:text-6xl">
        Últimos Proyectos
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="shadow-lg transition-all card bg-base-100 hover:shadow-xl">
          <figure>
            <Image src="/images/hero.jpg" width={400} height={400} alt="Shoes"/>
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold card-title">PaísesApp</h2>
            <p className="text-lg">
              Es una aplicación <span className="font-bold">Angular</span> que utiliza la API <a
              href="https://restcountries.com/" target="_blank" rel="noopener noreferrer"
              className="font-bold link">restcountries</a> para mostrar información de países. Se desarrolla
              con el uso
              de <span className="font-bold">Tailwind</span> y se añaden animaciones con <span
              className="font-bold">Animate.css</span>.
            </p>
            <div className="justify-around card-actions">
              <a className="gap-2 btn btn-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                Code
              </a>
              <a className="gap-2 btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                Visitar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
