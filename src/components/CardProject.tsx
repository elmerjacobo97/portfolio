import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { HiCode, HiExternalLink } from 'react-icons/hi';
import ScrollReveal from 'scrollreveal';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const CardProject = ({
  imageSrc,
  imageAlt,
  title,
  description,
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
      className="transition-all shadow-lg card hover:shadow-xl animate__animated animate__fadeIn"
      ref={cardRef}
    >
      <figure>
        <Image src={imageSrc} width={400} height={400} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold card-title">{title}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex justify-between card-actions">
          <a className="capitalize btn btn-sm btn-success">
            <HiCode size={20} style={{ marginRight: '5px' }} />
            Ver código
          </a>
          <a className="capitalize btn btn-sm btn-primary">
            <HiExternalLink size={20} style={{ marginRight: '5px' }} />
            Visitar sitio
          </a>
        </div>
      </div>
    </div>
  );
};
