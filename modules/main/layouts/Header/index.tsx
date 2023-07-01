// Libraries
import { FC, HTMLAttributes, useContext, useEffect, useState } from "react";

// Components
import Image from "next/image";
import { Button } from "ui/Button";

// Context
import { AuthContext } from "pages/_app";

// Api
import { apiGetUserById } from "api/users/apiGetUserById";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = () => {
  const { id, isRegistered } = useContext(AuthContext);
  const [image, setImage] = useState("/photo-cover.svg");

  useEffect(() => {
    (async () => {
      if (id > 1) {
        const response = await apiGetUserById(id);
        setImage(response?.user?.photo);
      }
    })();
  }, [id]);
  return (
    <div className="flex w-full justify-between py-[13px] px-4 gap-[14px]">
      <div className="flex items-center">
        <Image width={104} height={26} src="/logo.svg" alt="logo" />
      </div>
      <div className="flex gap-[10px]">
        {isRegistered ? (
          <img
            className="object-cover rounded-[100px]"
            width={40}
            height={40}
            src={image}
            alt="avatar"
          />
        ) : (
          <a href="#users">
            <Button styles="primary">Users</Button>
          </a>
        )}
        {!isRegistered && (
          <a href="#registerForm">
            <Button styles="primary">Sign up</Button>
          </a>
        )}
      </div>
    </div>
  );
};
