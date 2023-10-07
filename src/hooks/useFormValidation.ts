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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name as keyof FormData, value);
  };

  const validateField = (name: keyof FormData, value: string): string => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex =
      /^(\+|00)?(\d{1,3})?[ -]?\(?\d{1,4}\)?[ -]?\d{1,4}[ -]?\d{1,9}$/;

    let errorMessage = '';

    switch (name) {
      case 'name':
        if (value.trim() === '') {
          errorMessage = 'Ingrese su nombre';
        } else if (value.length < 3) {
          errorMessage = 'El nombre debe tener al menos 3 caracteres';
        } else if (value.length > 50) {
          errorMessage = 'El nombre no debe superar los 50 caracteres';
        } else {
          errorMessage = '';
        }
        break;
      case 'email':
        errorMessage =
          value.trim() === ''
            ? 'Ingrese su email'
            : !emailRegex.test(value)
            ? 'Ingrese un email válido'
            : '';
        break;
      case 'phone':
        errorMessage =
          value.trim() === ''
            ? 'Ingrese su teléfono'
            : !phoneRegex.test(value)
            ? 'Ingrese un número de teléfono válido'
            : '';
        break;
      case 'message':
        if (value.trim() === '') {
          errorMessage = 'Ingrese su mensaje';
        } else if (value.length < 20) {
          errorMessage = 'El mensaje debe tener al menos 20 caracteres';
        } else if (value.length > 500) {
          errorMessage = 'El mensaje no debe superar los 500 caracteres';
        } else {
          errorMessage = '';
        }
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));

    return errorMessage;
  };

  const validateForm = () => {
    let validationErrors: FormErrors = {};

    for (const fieldName in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, fieldName)) {
        const fieldValue = formData[fieldName as keyof FormData];
        const error = validateField(fieldName as keyof FormData, fieldValue);
        if (error) {
          validationErrors = { ...validationErrors, [fieldName]: error };
        }
      }
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
