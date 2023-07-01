// Types
import { QUERY_KEY_USERS } from './index';
import { restRequest } from '../../request';

export const getUserById = restRequest(QUERY_KEY_USERS);

export const apiGetUserById = async (id: number) => {
  return getUserById.get(`${id}`, false);
};
