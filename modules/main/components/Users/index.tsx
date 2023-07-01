// Libraries
import { FC, HTMLAttributes } from "react";

// Dto
import { UserGetDto } from "dto/UserGet.dto";

// Components
import { User } from "./components/User";
import { Button } from "ui/Button";

interface UsersProps extends HTMLAttributes<HTMLDivElement> {
  users: UserGetDto[];
  showMore: () => void;
  isLoading: boolean;
  isHasNextPage: boolean;
}

export const Users: FC<UsersProps> = ({ users, showMore, isHasNextPage }) => {
  return (
    <div id="users" className="flex flex-col items-center">
      <h2 className="mb-[50px] text-center text-[40px] leading-10">
        Working with GET request
      </h2>
      <div className="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] min-[360px]:grid-cols-[repeat(auto-fill,minmax(282px,1fr))] mb-[50px]">
        {users?.length > 0 &&
          users.map((user: UserGetDto) => {
            return <User key={user?.registration_timestamp} {...user} />;
          })}
      </div>
      {isHasNextPage && (
        <Button onClick={showMore} styles="primary">
          Show more
        </Button>
      )}
    </div>
  );
};
