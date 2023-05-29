import { CardProject } from "@/components";

export default function Projects() {
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl font-black text-primary md:text-6xl">
        Últimos Proyectos
      </h1>

      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
}
