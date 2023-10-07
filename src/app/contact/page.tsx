'use client';
import { Toast } from '@/components';
import { useFormValidation } from '../../hooks';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChatAlt2,
  HiOutlinePaperAirplane,
} from 'react-icons/hi';

export default function Contact() {
  const {
    errors,
    formData,
    isMessageSent,
    isLoading,
    hasError,
    handleChange,
    handleSubmit,
  } = useFormValidation();

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-800 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-black text-center md:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
          Contáctame
        </span>
      </h1>

      <div className="max-w-6xl px-4 mx-auto">
        <form
          className="max-w-md mx-auto mt-10 space-y-6"
          onSubmit={handleSubmit}
          noValidate
        >
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
              className={`w-full bg-white dark:bg-slate-800 input input-bordered ${
                errors.name ? 'input-error' : ''
              }`}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 label-text-alt">
              {errors.name}
            </span>
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
              className={`w-full bg-white dark:bg-slate-800 input input-bordered ${
                errors.email ? 'input-error' : ''
              }`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 label-text-alt">
              {errors.email}
            </span>
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
              className={`w-full bg-white dark:bg-slate-800 input input-bordered ${
                errors.phone ? 'input-error' : ''
              }`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <span className="text-sm text-red-500 label-text-alt">
              {errors.phone}
            </span>
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
              className={`w-full bg-white dark:bg-slate-800 h-40 textarea textarea-bordered ${
                errors.message ? 'textarea-error' : ''
              }`}
              placeholder="Ingrese su mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <span className="text-sm text-red-500 label-text-alt">
              {errors.message}
            </span>
          </div>
          <div className="w-full form-control">
            <button
              type="submit"
              className={`btn btn-success ${isLoading ? 'btn-disabled' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <HiOutlinePaperAirplane className="mr-2" size={25} />
                  Contactar
                </>
              )}
            </button>
          </div>
          {isMessageSent && (
            <Toast
              type="success"
              message="¡El mensaje se envió correctamente!"
            />
          )}
          {hasError && (
            <Toast
              type="error"
              message="¡Ocurrió un error al enviar el mensaje!"
            />
          )}
        </form>
      </div>
    </div>
  );
}
