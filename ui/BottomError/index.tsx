// Libraries
import { FC, HTMLAttributes, ReactNode } from "react";

interface IBottomError extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  name: string;
  rules?: object;
  props?: object;
  children?: ReactNode;
  helpertext?: string;
  errorMessage?: string;
  sizecontainer?: string;
}

export const BottomError: FC<IBottomError> = ({
  label,
  rules,
  helpertext = "",
  sizecontainer = "",
  errorMessage,
  ...props
}) => {
  const color = errorMessage ? "text-[#CB3D40]" : "text-[#7E7E7E]";
  const message = errorMessage ? errorMessage : helpertext;
  return (
    <div {...props} className={`${sizecontainer} flex flex-col gap-1`}>
      {props.children}
      {message && <p className={`${color} text-xs pl-[17px]`}>{message}</p>}
    </div>
  );
};
