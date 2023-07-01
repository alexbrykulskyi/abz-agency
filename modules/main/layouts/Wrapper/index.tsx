// Libraries
import { FC, HTMLAttributes, ReactNode } from "react";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[140px] pt-[140px] pb-[100px] bg-background px-4 md:px-8 lg:px-[60px]">
      {children}
    </div>
  );
};
