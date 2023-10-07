import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const Icon = type === 'success' ? HiCheckCircle : HiExclamationCircle;
  const alertClass = type === 'success' ? 'alert-success' : 'alert-error';

  return (
    <div
      className={`fixed z-50 transform  top-24 left-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-y-0 md:translate-x-0 md:top-14 md:right-5 md:left-auto`}
    >
      <div
        className={`flex flex-row items-center justify-center alert ${alertClass} text-sm md:text-base`}
      >
        <div className="mr-2 md:mr-4">
          <Icon size={20} className="md:text-xl" />
        </div>
        <span className="hidden md:inline">{message}</span>
        <span className="text-xs md:hidden">{message}</span>
      </div>
    </div>
  );
};
