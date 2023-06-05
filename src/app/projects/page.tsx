import { CardProject } from '@/components';

export default function Projects() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800">
      <h1 className="text-4xl font-black text-center md:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
          Últimos Proyectos
        </span>
      </h1>

      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3">
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="PaísesApp"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="UpTask"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
          <CardProject
            imageSrc="/images/hero.jpg"
            imageAlt="Shoes"
            title="CRM - Clientes + React + JSON-SERVER"
            description="Es una aplicación Angular que utiliza la API restcountries para mostrar información de países. Se desarrolla con el uso de Tailwind y se añaden animaciones con Animate.css."
          />
        </div>
      </div>
    </div>
  );
}
