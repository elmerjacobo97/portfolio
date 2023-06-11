import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { HiCode, HiExternalLink } from 'react-icons/hi';
import ScrollReveal from 'scrollreveal';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  technologies: string;
  seeCode: string;
  visiteSite: string;
}

export const CardProject = ({
  imageSrc,
  imageAlt,
  title,
  description,
  technologies,
  seeCode,
  visiteSite,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();

        if (cardRef.current) {
          sr.reveal(cardRef.current, {
            delay: 200,
            distance: '50px',
            duration: 500,
            easing: 'ease-out',
            origin: 'bottom',
          });
        }
      });
    }
  }, []);

  return (
    <div
      className="transition-all border shadow-lg border-slate-200 dark:border-slate-700 card card-compact hover:shadow-xl animate__animated animate__fadeIn"
      ref={cardRef}
    >
      <figure className="w-full">
        <Image src={imageSrc} width={400} height={400} alt={imageAlt} />
      </figure>
      <div className="flex flex-col justify-between p-4 card-body">
        <div>
          <h2 className="text-xl font-bold card-title">{title}</h2>
          <p className="mt-2 text-sm">{description}</p>
          <h2 className="mt-4 text-lg font-bold">Tecnologías</h2>
          <p className="text-sm">{technologies}</p>
        </div>
        <div className="flex justify-between">
          <a
            className="mr-2 capitalize btn btn-sm btn-success"
            href={seeCode}
            target="_blank noreferrer noopener"
          >
            <HiCode size={20} style={{ marginRight: '5px' }} />
            Ver código
          </a>
          <a
            className="capitalize btn btn-sm btn-primary"
            href={visiteSite}
            target="_blank noreferrer noopener"
          >
            <HiExternalLink size={20} style={{ marginRight: '5px' }} />
            Visitar sitio
          </a>
        </div>
      </div>
    </div>
  );
};
