// Hooks
import { useEffect, useState } from "react";

// Dto
import { UserGetDto } from "dto/UserGet.dto";

// Api
import { useGetUsers } from "api/users/useGetUsers";

export const useUsers = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const [users, setUsers] = useState<UserGetDto[]>([]);
  const [isHasNextPage, setIsHasNextPage] = useState(true);

  const { data, isLoading } = useGetUsers({ page: pageNumber, count: 6 });

  const showMore = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  const updateUsersList = async () => {
    await setUsers([]);
    setPageNumber(1);
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",
      {
        method: "GET",
      }
    );
    const json = await response.json();
    if (json?.users?.length > 0) {
      setUsers(json?.users);
    }
    setIsHasNextPage(true);
  };

  useEffect(() => {
    if (data?.users?.length > 0) {
      if (data?.total_pages === pageNumber) {
        setIsHasNextPage(false);
      }
      setUsers((prevState) => [...prevState, ...(data?.users ?? [])]);
    }
  }, [JSON.stringify(data?.users)]);

  return {
    users,
    showMore,
    isLoading,
    isHasNextPage,
    updateUsersList,
  };
};
