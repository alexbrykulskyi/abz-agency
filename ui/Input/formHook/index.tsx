// Libraries
import React from "react";

// Components
import { Input } from "../index";
import { BottomError } from "../../BottomError";

// Hooks
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";

interface InputProps {
  name: string;
  type?: string;
  rules?: object;
  label?: string;
  props?: object;
  disabled?: boolean;
  className?: string;
  helpertext?: string;
  ErrorWrap?: any;
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  sizecontainer?: string;
}

export const InputCustom = ({
  ErrorWrap = BottomError,
  name,
  type,
  label,
  rules,
  placeholder = label,
  className,
  errorMessage,
  ...props
}: InputProps) => {
  const { register } = useFormContext();

  const errorColor = errorMessage
    ? "outline-2 outline-[#CB3D40] text-[#CB3D40]"
    : "outline-0 text-[#7E7E7E]";

  const styles =
    "py-[14px] pl-4 bg-background border border-[#D0CFC] rounded w-full";
  const placeholderStyle =
    "select-none peer placeholder:text-transparent hover:placeholder:text-transparent focus:placeholder:text-transparent";

  const labelStyle =
    "px-1 text-xs bg-background rounded-sm max-w-full select-none truncate whitespace-nowrap absolute left-4 -top-[7px] transition-all";
  const focused = "peer-focus:-top-[7px] peer-focus:text-xs peer-focus:px-1";

  const shown =
    "peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:px-0";
  return (
    <div className="relative">
      <ErrorWrap
        label={label}
        name={name}
        errorMessage={errorMessage}
        {...props}
      >
        <Input
          id={name}
          type={type}
          className={`${styles} ${placeholderStyle} ${errorColor}`}
          {...register(name, rules)}
          placeholder={placeholder}
          {...props}
        />
        {label && (
          <label
            className={`${labelStyle} ${focused} ${shown} ${errorColor}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
      </ErrorWrap>
    </div>
  );
};
