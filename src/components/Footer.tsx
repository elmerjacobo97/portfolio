import { RiCopyrightLine } from 'react-icons/ri';
import { getCurrentYear } from '../helpers/index';

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="flex flex-col items-center justify-center w-full py-6 text-gray-500 bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col justify-between w-full px-10 space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:items-center sm:space-x-10 md:space-x-20">
        <div className="mb-4 text-center">
          <strong className="block mb-2">Ubicación</strong>
          Trujillo, Perú
        </div>
        <div className="mb-4 italic text-center">
          &ldquo;La innovación distingue a un líder de un seguidor.&rdquo; -
          Steve Jobs
        </div>

        <div className="mb-4 text-center">
          <strong className="block mb-2">Contacto</strong>
          ¿Tienes un proyecto en mente? {''}
          <a
            href="mailto:ejacobotiniano@gmail.com"
            className="text-blue-500 dark:text-blue-400"
          >
            Hablemos
          </a>
        </div>
      </div>
      <div className="w-full mt-4 border-t border-gray-300 dark:border-gray-700"></div>
      <div className="flex flex-col items-center mt-4 text-center md:flex-row">
        <div className="flex items-center justify-center gap-1">
          <RiCopyrightLine
            className="text-gray-500 dark:text-gray-300"
            size={20}
          />
          {currentYear} Elmer Jacobo.
        </div>
        <div className="md:ml-1">Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};
