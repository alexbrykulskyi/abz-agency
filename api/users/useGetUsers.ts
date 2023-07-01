import { apiGetUsers } from './apiGetUsers';
import { useQuery } from 'react-query';
import { QUERY_KEY_USERS } from './index';

export const useGetUsers = (params: { page?: number; count?: number } = {}) => {
  const { page } = params;
  return useQuery({
    queryKey: [QUERY_KEY_USERS, page],
    queryFn: () => apiGetUsers(params),
    staleTime: 1000 * 60 * 5,
  });
};
