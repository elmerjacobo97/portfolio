import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '@/hooks';

export const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" onChange={toggleTheme} className="hidden" />
      <div className="relative h-8 transition-all duration-300 ease-in-out rounded-full shadow-md w-14">
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
            isDarkMode
              ? 'translate-x-6 bg-indigo-600'
              : 'translate-x-0 bg-gray-700'
          } `}
        >
          {isDarkMode ? (
            <FaMoon className="w-4 h-4 text-white transition-all duration-300 ease-in-out" />
          ) : (
            <FaSun className="w-4 h-4 text-orange-300 transition-all duration-300 ease-in-out" />
          )}
        </div>
        <div
          className={`bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full w-full h-full transition-opacity duration-300 ease-in-out ${
            isDarkMode ? 'opacity-100' : 'opacity-30'
          }`}
        ></div>
      </div>
    </label>
  );
};
