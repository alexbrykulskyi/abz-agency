import { useGetPositions } from "api/positions/useGetPositions";

export const usePosition = () => {
  const { data, isLoading } = useGetPositions();

  const positions =
    !isLoading && data?.positions?.length > 0 ? data?.positions : [];

  return {
    positions,
    isLoading,
  };
};
