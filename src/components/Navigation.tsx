import React from 'react';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <>
      <li><Link href={'/'}>Inicio</Link></li>
      <li><Link href={'/about'}>Sobre mi</Link></li>
      <li><Link href={'/skills'}>Skills</Link></li>
      <li><Link href={'/projects'}>Proyectos</Link></li>
      <li><a>Contacto</a></li>
    </>
  );
};
