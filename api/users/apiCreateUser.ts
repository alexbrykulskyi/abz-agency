import { QUERY_KEY_USERS } from './index';
import { restRequest } from '../../request';

// Types
export const createMinistry = restRequest(QUERY_KEY_USERS);

interface ApiCreateUserInterface {
  formData: object;
  token: string;
}

export const apiCreateUser = async (object = {}) => {
  const { formData, token } = object as ApiCreateUserInterface;
  return createMinistry.post('', true, formData, token);
};
