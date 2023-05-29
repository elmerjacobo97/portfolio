import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Elmer Jacobo",
  description: "Elmer Jacobo Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`h-screen ${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
