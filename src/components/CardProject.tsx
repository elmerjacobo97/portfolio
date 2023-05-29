import Image from "next/image";

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
  return (
    <div className="shadow-lg transition-all card bg-base-100 hover:shadow-xl">
      <figure>
        <Image src={imageSrc} width={400} height={400} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold card-title">{title}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex justify-between card-actions">
          <a
            className="btn btn-sm btn-success"
            style={{ marginRight: "0.5rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            Ver código
          </a>
          <a className="btn btn-sm btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            Visitar sitio
          </a>
        </div>
      </div>
    </div>
  );
};
