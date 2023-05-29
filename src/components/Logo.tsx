import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-9 h-9 text-primary dark:text-success mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm3 13h-2c-1.28 0-2.5-.5-3.47-1.46-.97-.97-1.46-2.19-1.46-3.47V8m6 1v2.03c0 2.24-1.81 4.05-4.05 4.05H8.05C5.81 15.08 4 13.27 4 11.03V9m2-1h2m6-2v2m0 6h-2m-6 0h2m2 0v-2"
        />
      </svg>
      <span className="font-semibold text-primary dark:text-success text-xl tracking-tight">
        Developer
      </span>
    </Link>
  );
};
