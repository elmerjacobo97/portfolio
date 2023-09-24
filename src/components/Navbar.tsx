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
    <nav className="fixed inset-x-0 top-0 z-50 h-16 shadow bg-slate-200 navbar dark:bg-slate-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost md:hidden"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className={`mt-3 w-52 p-2 shadow menu dropdown-content rounded-box h-56 max-h-60 bg-slate-200 dark:bg-slate-700 ${
              isDropdownOpen ? 'block' : 'hidden'
            }`}
          >
            <Navigation closeDropdown={closeDropdown} />
          </ul>
        </div>
        <div className="hidden md:flex">
          <Logo />
        </div>
      </div>
      <div className="hidden navbar-center md:flex">
        <ul className="gap-2 menu menu-horizontal ">
          <Navigation closeDropdown={closeDropdown} />
        </ul>
      </div>
      <div className="gap-5 navbar-end">
        <ToggleThemeButton />
        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image
              src="/images/profile.jpg"
              width={100}
              height={100}
              className="rounded-full"
              priority
              alt="Image Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
