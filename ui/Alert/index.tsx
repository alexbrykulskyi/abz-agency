// Libraries
import { FC, HTMLAttributes, ReactNode } from "react";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  type?: "success" | "info" | "warning" | "error";
  Action?: ReactNode;
  banner?: boolean;
  message?: string;
  onClose?: () => void;
  showIcon?: boolean;
  closable?: boolean;
  closeText?: ReactNode;
  closeIcon?: ReactNode;
  afterClose?: () => void;
  description?: ReactNode;
}

export const Alert: FC<AlertProps> = ({
  message,
  type = "error",
  description,
  ...options
}) => {
  let alertClasses = "bg-white text-gray-800 border-l-4 ";
  switch (type) {
    case "success":
      alertClasses += "border-green-500";
      break;
    case "error":
      alertClasses += "border-red-500";
      break;
    default:
      alertClasses += "border-blue-500";
  }

  return (
    <div className={`${alertClasses} p-4 rounded shadow-lg`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
        </div>
        <div className="ml-4">
          <p className="text-base text-[#CB3D40] font-semibold">{message}</p>
          <p className="text-sm text-[#7E7E7E]">{description}</p>
        </div>
      </div>
    </div>
  );
};
