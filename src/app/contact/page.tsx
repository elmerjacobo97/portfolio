import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChatAlt2,
  HiOutlinePaperAirplane,
} from 'react-icons/hi';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800">
      <h1 className="text-4xl font-black text-center text-primary md:text-6xl">
        Contáctame
      </h1>

      <div className="max-w-6xl px-4 mx-auto">
        <form className="max-w-md mx-auto mt-10 space-y-6">
          <div className="w-full form-control">
            <label className="label" htmlFor="name">
              <span className="flex items-center label-text">
                <HiOutlineUser className="mr-2" size={20} />
                Nombre
              </span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ingrese su nombre"
              className="w-full bg-white dark:bg-slate-800 input input-bordered"
            />
          </div>
          <div className="w-full form-control">
            <label className="label" htmlFor="email">
              <span className="flex items-center label-text">
                <HiOutlineMail className="mr-2" size={20} />
                Email
              </span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su email"
              className="w-full bg-white dark:bg-slate-800 input input-bordered"
            />
          </div>
          <div className="w-full form-control">
            <label className="label" htmlFor="tel">
              <span className="flex items-center label-text">
                <HiOutlinePhone className="mr-2" size={20} />
                Teléfono
              </span>
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Ingrese su teléfono"
              className="w-full bg-white dark:bg-slate-800 input input-bordered"
            />
          </div>
          <div className="w-full form-control">
            <label className="label" htmlFor="message">
              <span className="flex items-center label-text">
                <HiOutlineChatAlt2 className="mr-2" size={20} />
                Mensaje
              </span>
            </label>
            <textarea
              id="message"
              className="h-48 bg-white textarea textarea-bordered dark:bg-slate-800"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>
          <div className="w-full form-control">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 btn btn-success"
            >
              <HiOutlinePaperAirplane className="mr-2" size={25} />
              Contactar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
