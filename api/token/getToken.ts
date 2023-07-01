import { restRequest } from '../../request';
import { QUERY_KEY_TOKEN } from './index';

export const getToken = restRequest(QUERY_KEY_TOKEN);

export const apiGetToken = async (params: any = {}) => {
  return getToken.get('', false, params);
};
