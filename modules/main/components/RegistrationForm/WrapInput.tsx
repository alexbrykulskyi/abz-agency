// Libraries
import { FC, HTMLAttributes } from "react";

// Patterns
import { namePattern } from "utils/namePattern";
import { emailPattern } from "utils/emailPattern";
import { phonePattern } from "utils/phonePattern";

// Components
import { InputCustom } from "ui/Input/formHook";

// Type
import { FieldErrors } from "react-hook-form";

interface WrapInputProps extends HTMLAttributes<HTMLDivElement> {
  errorMessage: FieldErrors;
}

export const WrapInput: FC<WrapInputProps> = ({ errorMessage }) => {
  return (
    <div className="flex flex-col gap-[50px] w-full">
      <InputCustom
        errorMessage={errorMessage?.name?.message}
        name="name"
        label="Your name"
        rules={namePattern}
      />
      <InputCustom
        errorMessage={errorMessage?.email?.message}
        name="email"
        label="Email"
        rules={emailPattern}
      />
      <InputCustom
        errorMessage={errorMessage?.phone?.message}
        helpertext="+38 (XXX) XXX - XX - XX"
        name="phone"
        label="Phone"
        rules={phonePattern}
      />
    </div>
  );
};
