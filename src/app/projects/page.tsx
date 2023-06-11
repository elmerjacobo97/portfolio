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
            imageSrc="/images/projects/pokemon-game.png"
            imageAlt="CountryApp"
            title="Pokémon Game: Adivina y Entrena con los Pokémon"
            description="Pokémon Game es una emocionante aplicación web diseñada para entrenar tus habilidades de reconocimiento de Pokémon. Pon a prueba tus conocimientos y agudiza tu intuición adivinando los diferentes Pokémon que se te presentarán. ¡Sumérgete en el fascinante mundo de los Pokémon y mejora tu capacidad para identificar a estas criaturas únicas!"
            technologies="Vue.js, JavaScript, CSS"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/foxbel-music.png"
            imageAlt="CountryApp"
            title="Foxbel Music: Descubre, Explora y Disfruta de la Mejor Música"
            description="Foxbel Music es una emocionante aplicación web que te permite descubrir, explorar y disfrutar de una amplia selección de canciones, álbumes y artistas. Con la capacidad de consumir la API de Deezer, tendrás acceso a un extenso catálogo musical en tus manos."
            technologies="React, TypeScript, Tailwind"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/country-app.png"
            imageAlt="CountryApp"
            title="CountryApp: Descubre Información de Países"
            description="CountryApp es una aplicación Angular que te permite explorar el mundo a través de la API restcountries. Descubre información detallada de países con un diseño atractivo y animaciones cautivadoras. Amplía tus conocimientos sobre diferentes naciones con CountryApp."
            technologies="Angular, TypeScript, Tailwind, Animate.css"
            seeCode="https://github.com/elmerjacobo97/country-app-angular"
            visiteSite="https://country-app-angular-mu.vercel.app/countries/by-capital"
          />
          <CardProject
            imageSrc="/images/projects/uptask.png"
            imageAlt="UpTask"
            title="UpTask: Plataforma de Gestión de Tareas"
            description="El objetivo del proyecto es crear una aplicación web completa que abarque tanto el desarrollo del backend como del frontend, utilizando Node.js y MongoDB para construir una API RESTful y React para consumirla y ofrecer una experiencia interactiva al usuario."
            technologies="Node.js, Express, MongoDB, Socket.io, TailwindCSS"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/crm-clientes.png"
            imageAlt="CRM: Gestiona y Organiza tus Clientes de Forma Eficiente"
            title="CRM: Gestiona y Organiza tus Clientes de Forma Eficiente"
            description="Desarrollo de una aplicación React que permite agregar clientes y realizar las operaciones básicas de un CRUD (Crear, Leer, Actualizar y Eliminar). La aplicación ofrece una interfaz intuitiva y funcional para gestionar los datos de los clientes de manera eficiente."
            technologies="React, TailwindCSS, JsonServer, React-Router-Dom"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/gastos.png"
            imageAlt="Planificador de Gastos"
            title="Planificador de Gastos: Organiza y Controla tus Finanzas"
            description="Desarrollo de un planificador de gastos que permite a los usuarios registrar, categorizar y filtrar sus gastos. Con esta herramienta, podrán administrar y monitorear sus finanzas de manera eficiente, visualizando y analizando los gastos según categorías específicas."
            technologies="Vite, React, TypeScript, CSS"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/open-jira.png"
            imageAlt="OpenJira"
            title="OpenJira: Plataforma de Administración de Tareas"
            description="OpenJira es un administrador de tareas que utiliza Next.js en el frontend y Mongoose para consultas a la base de datos. Permite gestionar y organizar tareas de forma eficiente, ofreciendo una experiencia intuitiva y funcional."
            technologies="Next.js, MongoDB, Mongoose, MaterialUI, TypeScript"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/journal-app.png"
            imageAlt="JournalApp"
            title="JournalApp: Gestiona tus Notas y Almacénalas en Firestore"
            description="JournalApp es una aplicación altamente funcional que te permite organizar, editar y eliminar notas en Firestore. Con características robustas como registro de usuarios, autenticación segura y la capacidad de subir imágenes."
            technologies="React.js, Redux, Firebase, Redux-Toolkit, MaterialUI"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/citas-typescript.png"
            imageAlt="Administrador de Pacientes de Veterinaria"
            title="Administrador de Pacientes de Veterinaria"
            description="Nuestro Administrador de Pacientes de Veterinaria te permite crear, editar y dar de alta a tus pacientes de forma sencilla. Todos los datos se almacenan de manera segura en LocalStorage, brindándote acceso rápido y fácil a la información de tus pacientes en todo momento."
            technologies="Vite, React.js, TypeScript, TailwindCSS"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/bebidas.png"
            imageAlt="BebidaSearcher"
            title="BebidaSearcher: Encuentra Bebidas por Ingrediente"
            description="BebidaSearcher es un buscador de bebidas que te permite encontrar tus bebidas favoritas filtrando por ingredientes. Esta aplicación utiliza React y Bootstrap, aprovechando la Context API para gestionar la información y consume la API externa themmealdb para obtener los datos de las bebidas."
            technologies="Vite, React.js, React Bootstrap"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/cotizador-vue.png"
            imageAlt="Cotizador de Préstamos"
            title="Cotizador de Préstamos: Simula y Calcula tus Préstamos de Forma Rápida y Precisa"
            description="Nuestro Cotizador de Préstamos te permite simular y calcular diferentes escenarios de préstamos de manera rápida y precisa. Puedes elegir un plazo establecido y obtener los resultados de tu préstamo en pantalla de forma clara y detallada. Con esta herramienta, podrás tomar decisiones financieras informadas y planificar tus préstamos de manera efectiva."
            technologies="Vite, Vue.js, TailwindCSS"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/pokemon.png"
            imageAlt="Pokemon Static"
            title="Pokemon Static: Descubre y Colecciona tus Pokemons Favoritos"
            description="Explora el maravilloso mundo de los Pokemons con Pokemon Static. Nuestro sitio web te permite descubrir una amplia variedad de Pokemons, gracias a la integración de la API externa (pokeapi). Además, podrás agregar tus Pokemons favoritos a tu lista personalizada de favoritos. Sumérgete en esta emocionante aventura y disfruta de la magia y diversión que los Pokemons tienen para ofrecerte."
            technologies="Next.js, TypeScript, NextUI"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/cotizador-seguros-auto.png"
            imageAlt="Cotizador de Seguros de Auto"
            title="Cotizador de Seguros de Auto: Simula y Compara tus Opciones de Cobertura"
            description="Nuestro Cotizador de Seguros de Auto te brinda la posibilidad de simular y comparar diferentes opciones de cobertura de seguros de manera rápida y sencilla. Puedes seleccionar la marca, el año y el plan de tu auto para obtener los resultados de forma precisa. Con esta herramienta, podrás tomar decisiones informadas sobre tu seguro de auto y encontrar la opción que mejor se adapte a tus necesidades y presupuesto."
            technologies="React.js, Context API, TailwindCSS, Vite"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/cotizador-cripto.png"
            imageAlt="Cripto"
            title="Cotizador de Criptomonedas: Obtén Precios en Tiempo Real de tus Criptos Favoritas"
            description="Nuestro Cotizador de Criptomonedas te permite obtener cotizaciones y verificar los precios de tus criptomonedas al instante. Utilizando una API externa (cryptocompare) y desarrollado en React, esta herramienta te brinda información actualizada y en tiempo real sobre las criptos más populares del mercado. Mantén un seguimiento de tus inversiones y toma decisiones informadas en el mundo de las criptomonedas con nuestro cotizador confiable y eficiente."
            technologies="JSX, Vite, React.js, CSS"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/clima.png"
            imageAlt="Clima"
            title="Buscador de Clima: Conoce el Tiempo en tu Ciudad al Instante"
            description="Con nuestro Buscador de Clima, puedes obtener de manera rápida la información sobre el clima de tu ciudad. Utilizando una API externa (openweathermap), podrás conocer la temperatura actual, las condiciones climáticas y el pronóstico extendido de tu ubicación. Mantente actualizado sobre el clima en tiempo real y planifica tus actividades al aire libre con confianza. ¡Descubre el tiempo que te espera con nuestro buscador de clima eficiente y preciso!"
            technologies="React.js, Context API, TailwindCSS, Vite"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/buscador-recetas.png"
            imageAlt="RecetaFinder"
            title="RecetaFinder: Descubre Deliciosas Recetas a través de una API"
            description="RecetaFinder es un proyecto web que utiliza una API externa (themealdb) para realizar consultas y mostrar recetas. Con esta aplicación, podrás explorar una amplia variedad de recetas, buscar platos específicos y descubrir nuevas ideas culinarias para sorprender a tus seres queridos."
            technologies="HTML, Bootstrap, JavaScript"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/techpro.png"
            imageAlt="TechPRO"
            title="Audífonos TechPRO: Sumérgete en un Sonido Profesional"
            description="Descubre la experiencia auditiva definitiva con Audífonos TechPRO. Nuestro sitio web, desarrollado con un enfoque Mobile First, ofrece una experiencia adaptada a cualquier tipo de dispositivo. Explora nuestra amplia gama de audífonos de alta calidad y sumérgete en un sonido profesional que transformará tu forma de escuchar música, ver películas y disfrutar de tus contenidos favoritos."
            technologies="HTML, CSS, Normalize"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/nucleus.png"
            imageAlt="Nucleus: Gestiona Pagos en tu Celular de Forma Sencilla"
            title="Nucleus: Gestiona Pagos en tu Celular de Forma Sencilla"
            description="Nucleus es un proyecto innovador que te permite recibir y realizar pagos de manera conveniente desde tu celular. Con un enfoque Mobile First y utilizando la metodología de nomenclatura BEM para las clases, esta aplicación te brinda una experiencia de usuario intuitiva y fluida. Simplifica tus transacciones financieras y administra tus pagos de forma segura y eficiente con Nucleus. Descubre la comodidad de realizar pagos desde tu dispositivo móvil con nuestra solución avanzada."
            technologies="HTML, CSS, BEM"
            seeCode=""
            visiteSite=""
          />
          <CardProject
            imageSrc="/images/projects/arquitectura-bosque.png"
            imageAlt="ArquitecturaBosque: Tu Hogar en el Bosque"
            title="ArquitecturaBosque: Tu Hogar en el Bosque"
            description="ArquitecturaBosque es una empresa especializada en la construcción de casas de ensueño en entornos naturales. Nuestro enfoque se centra en crear hogares únicos y personalizados, perfectamente integrados en el entorno boscoso. Permítenos hacer realidad la casa de tus sueños, donde podrás disfrutar de la tranquilidad y la belleza de la naturaleza en tu propio hogar."
            technologies="HTML, CSS, BEM"
            seeCode=""
            visiteSite=""
          />
        </div>
      </div>
    </div>
  );
}
