import Link from 'next/link';

interface Props {
  closeDropdown: () => void;
}

export const Navigation = ({ closeDropdown }: Props) => {
  return (
    <>
      <li>
        <Link href={'/'} onClick={closeDropdown}>
          Inicio
        </Link>
      </li>
      <li>
        <Link href={'/about'} onClick={closeDropdown}>
          Sobre mi
        </Link>
      </li>
      <li>
        <Link href={'/skills'} onClick={closeDropdown}>
          Skills
        </Link>
      </li>
      <li>
        <Link href={'/projects'} onClick={closeDropdown}>
          Proyectos
        </Link>
      </li>
      <li>
        <Link href={'/contact'} onClick={closeDropdown}>
          Contacto
        </Link>
      </li>
      <li>
        <Link href={'/blog'} onClick={closeDropdown}>
          Blog
        </Link>
      </li>
    </>
  );
};
