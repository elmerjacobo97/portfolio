export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-black text-center md:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
          Blog
        </span>
      </h1>

      <div className="max-w-6xl px-4 mx-auto">
        <div>
          <h2 className="text-2xl font-bold">Artículos de tecnología</h2>
          <p>
            Aquí puedes compartir artículos relacionados con las últimas
            tendencias, novedades y avances en el campo de la tecnología. Puedes
            hablar sobre nuevos lenguajes de programación, frameworks,
            herramientas, casos de uso de tecnologías emergentes, etc.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Tutoriales y guías de aprendizaje
          </h2>
          <p>
            En esta sección, puedes publicar tutoriales y guías paso a paso para
            ayudar a los lectores a aprender nuevas habilidades o dominar
            tecnologías específicas. Puedes proporcionar ejemplos de código,
            capturas de pantalla y explicaciones detalladas para facilitar el
            aprendizaje.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Consejos y mejores prácticas</h2>
          <p>
            Comparte consejos útiles, trucos y mejores prácticas relacionadas
            con el desarrollo de software y la tecnología en general. Puedes
            abordar temas como la optimización del rendimiento, la seguridad, la
            escalabilidad y otros aspectos importantes a tener en cuenta al
            desarrollar aplicaciones.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Recursos y herramientas</h2>
          <p>
            En esta sección, puedes recomendar recursos, herramientas y
            bibliotecas útiles que pueden ayudar a los desarrolladores a
            simplificar su trabajo y mejorar la eficiencia. Puedes incluir
            enlaces a sitios web, repositorios de código, libros, videos y otros
            recursos relevantes.
          </p>
        </div>
      </div>
    </div>
  );
}
