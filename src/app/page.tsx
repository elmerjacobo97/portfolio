import { texts } from '@/helpers';
import { TypingEffect } from '@/components';
import { HiOutlineDownload } from 'react-icons/hi';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white hero dark:bg-slate-800 animate__animated animate__fadeIn">
      <div className="flex-grow text-center hero-content">
        <div className="max-w-md">
          <h1 className="my-10 text-3xl font-black text-transparent sm:text-6xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
            Elmer Jacobo
          </h1>
          <p className="text-base sm:text-lg">
            Desarrollador de software apasionado por la tecnología y la
            innovación.
          </p>
          <h2 className="mt-3 text-xl font-black text-blue-300 dark:text-blue-400 sm:text-3xl">
            <span className="block">¿Qué hago?</span>
            <TypingEffect texts={texts} speed={100} />
          </h2>

          <div className="flex justify-center mt-10 space-x-6">
            <a
              href="https://twitter.com/elmer_jac97"
              className="transition duration-200 ease-in-out btn btn-circle btn-accent btn-outline hover:bg-blue-500 hover:text-white focus:ring focus:ring-blue-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/elmjacobo/"
              className="transition duration-200 ease-in-out btn btn-circle btn-accent btn-outline hover:bg-blue-700 hover:text-white focus:ring focus:ring-blue-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://github.com/elmerjacobo97"
              className="transition duration-200 ease-in-out btn btn-circle btn-accent btn-outline hover:bg-gray-800 hover:text-white focus:ring focus:ring-gray-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://wa.me/+51927347691"
              className="transition duration-200 ease-in-out btn btn-circle btn-accent btn-outline hover:bg-green-500 hover:text-white focus:ring focus:ring-green-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          <button className="gap-1 mt-10 btn btn-primary ">
            <HiOutlineDownload size={20} />
            Descargar CV
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
