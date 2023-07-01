import { useQuery } from 'react-query';
import { apiGetPositions } from './apiGetPositions';
import { QUERY_KEY_POSITIONS } from './index';

export const useGetPositions = (params: any = {}) => {
  return useQuery({
    queryKey: QUERY_KEY_POSITIONS,
    queryFn: () => apiGetPositions(params),
    staleTime: 1000 * 60 * 5,
  });
};
