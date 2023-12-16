import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
        {'{Elmer}'}
      </h1>
    </Link>
  );
};
