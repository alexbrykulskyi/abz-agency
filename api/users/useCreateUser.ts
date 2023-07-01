import { useMutation } from 'react-query';
import { QUERY_KEY_USERS } from './index';
import { apiCreateUser } from './apiCreateUser';

export const useCreateUser = () => {
  return useMutation({
    mutationKey: QUERY_KEY_USERS,
    mutationFn: apiCreateUser,
  });
};
