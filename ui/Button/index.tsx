// Libraries
import { FC, HTMLAttributes } from "react";
import { Loader } from "../Loader";

// Hooks

// Components

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  styles?: "primary" | "secondary";
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  styles = "primary",
  children,
  className,
  isLoading,
  ...props
}) => {
  const hover = "hover:bg-[#FFE302]";
  const disabled = "disabled:bg-[#B4B4B4] text-[#FFFFFFDE]";
  let buttonStyles =
    "flex items-center justify-center px-4 min-h-[34px] min-w-[100px] min-[341px]:px-[22px] py-1 text-base rounded-[80px] transition";

  if (styles === "primary") {
    buttonStyles += " text-[#000000DE] bg-primary";
  }
  return (
    <button
      className={`${buttonStyles} ${className} ${hover} ${disabled}`}
      {...props}
    >
      {isLoading ? <Loader width={26} /> : children}
    </button>
  );
};
