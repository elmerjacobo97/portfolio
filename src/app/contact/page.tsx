import React from "react";

export default function Contact() {
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl font-black text-primary md:text-6xl">
        Contáctame
      </h1>

      <div className="mx-auto max-w-6xl px-4">
        <form className="max-w-md mx-auto space-y-6 mt-10">
          <div className="form-control w-full">
            <label className="label" htmlFor="name">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ingrese su nombre"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label" htmlFor="tel">
              <span className="label-text">Teléfono</span>
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Ingrese su teléfono"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label" htmlFor="message">
              <span className="label-text">Mensaje</span>
            </label>
            <textarea
              id="message"
              className="textarea textarea-bordered"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <button className="btn btn-success gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Contactar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
