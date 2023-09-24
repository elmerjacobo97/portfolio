import Link from 'next/link';

interface Props {
  closeDropdown: () => void;
}

export const Navigation = ({ closeDropdown }: Props) => {
  return (
    <>
      <li>
        <Link href={'/'} onClick={closeDropdown} className="text-lg">
          Inicio
        </Link>
      </li>
      <li>
        <Link href={'/about'} onClick={closeDropdown} className="text-lg">
          Sobre mi
        </Link>
      </li>
      <li>
        <Link href={'/skills'} onClick={closeDropdown} className="text-lg">
          Skills
        </Link>
      </li>
      <li>
        <Link href={'/projects'} onClick={closeDropdown} className="text-lg">
          Proyectos
        </Link>
      </li>
      <li>
        <Link href={'/contact'} onClick={closeDropdown} className="text-lg">
          Contacto
        </Link>
      </li>
    </>
  );
};
