// Libraries
import { FC } from "react";

// Dto
import { UserGetDto } from "dto/UserGet.dto";

interface UserProps extends UserGetDto {}

export const User: FC<UserProps> = ({
  name,
  email,
  phone,
  photo,
  position,
}) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-[10px] p-5 gap-5">
      <img
        className="rounded-[100px]"
        width={70}
        height={70}
        src={photo}
        alt="photo"
      />
      <div data-title={name}>
        <p className="multiline-ellipsis-1" title={name}>
          {name}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div data-title={position}>
          <p className="multiline-ellipsis-1">{position}</p>
        </div>
        <div data-title={email}>
          <a className="multiline-ellipsis-1" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div data-title={phone}>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
};
