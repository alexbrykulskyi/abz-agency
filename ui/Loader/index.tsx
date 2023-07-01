// Libraries
import { FC } from "react";

interface LoaderProps {
  width?: number;
}

export const Loader: FC<LoaderProps> = ({ width = 48 }) => {
  return (
    <div>
      <img className="animate-spin" width={width} src="/loader.svg" />
    </div>
  );
};
