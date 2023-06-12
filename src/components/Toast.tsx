import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const Icon = type === 'success' ? HiCheckCircle : HiExclamationCircle;
  const alertClass = type === 'success' ? 'alert-success' : 'alert-error';

  return (
    <div className="toast">
      <div
        className={`flex flex-row items-center justify-center alert ${alertClass}`}
      >
        <div>
          <Icon size={30} />
        </div>
        <span>{message}</span>
      </div>
    </div>
  );
};
