// Libraries
import { FC, HTMLAttributes, ReactNode } from "react";

interface IndexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container: FC<IndexProps> = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto w-full lg:w-[1170px]">{children}</div>
  );
};
