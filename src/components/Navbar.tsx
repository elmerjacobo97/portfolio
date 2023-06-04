'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Navigation, ToggleThemeButton, Logo } from '@/components';

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 h-16 bg-slate-200 shadow navbar dark:bg-slate-800 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`mt-3 w-52 p-2 shadow menu dropdown-content rounded-box bg-slate-200 dark:bg-slate-800 ${
              isDropdownOpen ? 'block' : 'hidden'
            }`}
          >
            <Navigation closeDropdown={closeDropdown} />
          </ul>
        </div>
        <div className="hidden sm:flex">
          <Logo />
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <Navigation closeDropdown={closeDropdown} />
        </ul>
      </div>
      <div className="gap-5 navbar-end">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-slate-600 ring-offset-2 ring-offset-base-100">
            <Image
              src="/images/profile.jpg"
              width={100}
              height={100}
              className="rounded-full"
              alt="Image Profile"
            />
          </div>
        </div>
        <ToggleThemeButton />
      </div>
    </nav>
  );
};
