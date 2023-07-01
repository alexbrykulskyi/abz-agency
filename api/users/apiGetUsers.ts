// Types
import { QUERY_KEY_USERS } from './index';
import { restRequest } from '../../request';

export const getUsers = restRequest(QUERY_KEY_USERS);

export const apiGetUsers = async (params: any = {}) => {
  return getUsers.get('', false, params);
};
