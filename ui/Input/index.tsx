import { LegacyRef, forwardRef } from "react";

export const Input = forwardRef(
  (props: any, ref: LegacyRef<HTMLInputElement>) => {
    return <input {...props} ref={ref} />;
  }
);
