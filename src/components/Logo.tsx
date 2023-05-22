import React from 'react';

export const Logo = () => {
  return (
    <a className="btn btn-ghost normal-case text-xl flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-9 h-9 text-primary dark:text-accent mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm-5.657 10.657a8.936 8.936 0 0 1 1.38-2.075M2 15c1.686-1.726 4.19-3 7-3s5.314 1.274 7 3m-4 3H5m14 0h-2.38A8.941 8.941 0 0 1 13 20h-2a8.941 8.941 0 0 1-3.62-.75H5m14 0V3"
        />
      </svg>
      <span className="font-semibold text-primary dark:text-accent text-xl tracking-tight">
        Elmer
      </span>
    </a>
  );
};
