import { texts } from "@/helpers";
import { TypingEffect } from "@/components";

export default function Home() {
  return (
    <div
      className="min-h-screen h-screen hero"
      style={{ backgroundImage: `url("/images/hero.jpg")` }}
    >
      <div className="bg-opacity-60 hero-overlay"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-black sm:text-6xl">Elmer Jacobo</h1>
          <h2 className="mt-3 text-xl font-black sm:text-3xl">
            Soy <TypingEffect texts={texts} speed={150} />
          </h2>
          <button className="mt-10 gap-2 btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
}
