import Link from 'next/link';
import { HiCode } from 'react-icons/hi';

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center p-3 transition-all duration-300 ease-in-out transform rounded-full cursor-pointer bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 hover:shadow-2xl hover:bg-opacity-90 hover:scale-110">
        <div className="relative">
          <HiCode className="absolute -top-0.5 -left-0.5 text-4xl text-white transition-transform duration-600 ease-in-out transform hover:scale-110 hover:-rotate-12" />
          <HiCode className="text-3xl text-white transition-transform ease-in-out transform duration-600 hover:scale-110 hover:rotate-12" />
        </div>
        <span className="ml-3 text-lg font-extrabold text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
          Elmer
          <span className="font-light">JS</span>
        </span>
      </div>
    </Link>
  );
};
