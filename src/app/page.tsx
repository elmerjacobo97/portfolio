import { texts } from '@/helpers';
import { TypingEffect } from '@/components';
import { HiOutlineDownload } from 'react-icons/hi';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';
import { getCurrentYear } from '../helpers';

export default function Home() {
  const currentYear = getCurrentYear();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white hero dark:bg-slate-800 animate__animated animate__fadeIn">
      <div className="flex-grow text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-black text-transparent sm:text-6xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
            Elmer Jacobo
          </h1>
          <h2 className="mt-3 text-xl font-black sm:text-3xl">
            Soy <TypingEffect texts={texts} speed={150} />
          </h2>
          <div className="flex justify-center mt-10 space-x-6">
            <a href="#" className="btn btn-circle btn-accent btn-outline">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="btn btn-circle btn-accent btn-outline">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="btn btn-circle btn-accent btn-outline">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="btn btn-circle btn-accent btn-outline">
              <FaGithub size={24} />
            </a>
          </div>
          <button className="gap-1 mt-10 btn btn-primary animate-pulse">
            <HiOutlineDownload size={20} />
            Descargar CV
          </button>
        </div>
      </div>
      <footer className="flex items-center justify-center py-4 text-gray-500 dark:text-gray-400">
        <RiCopyrightLine className="mr-1" />
        {currentYear} Elmer Jacobo. Todos los derechos reservados.
      </footer>
    </div>
  );
}
