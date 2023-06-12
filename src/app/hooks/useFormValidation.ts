import { ChangeEvent, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormData, FormErrors } from '@/interfaces';

export function useFormValidation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors: FormErrors = {};

    // Validar campos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^(\+|00)?(\d{1,3})?[ -]?\(?\d{1,4}\)?[ -]?\d{1,4}[ -]?\d{1,9}$/;

    if (formData.name.trim() === '') {
      validationErrors.name = 'Ingrese su nombre';
    }

    if (formData.email.trim() === '') {
      validationErrors.email = 'Ingrese su email';
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Ingrese un email válido';
    }

    if (formData.phone.trim() === '') {
      validationErrors.phone = 'Ingrese su teléfono';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      validationErrors.phone = 'Ingrese un número de teléfono válido';
    }

    if (formData.message.trim() === '') {
      validationErrors.message = 'Ingrese su mensaje';
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setIsFormSubmitted(true);
      setHasError(false);

      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USERID || '');

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICEID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID || '',
          templateParams
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsMessageSent(true);
        })
        .catch((error) => {
          console.log('FAILED...', error);
          setIsMessageSent(false);
          setHasError(true);
          setTimeout(() => {
            setHasError(false);
          }, 3000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsMessageSent(false);
      setIsFormSubmitted(false);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMessageSent) {
      timeoutId = setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMessageSent]);

  useEffect(() => {
    if (isFormSubmitted) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted]);

  return {
    formData,
    errors,
    isLoading,
    hasError,
    isMessageSent,
    handleChange,
    handleSubmit,
  };
}
