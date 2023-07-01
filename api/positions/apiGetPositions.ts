// Types
import { QUERY_KEY_POSITIONS } from './index';
import { restRequest } from '../../request';

export const getPositions = restRequest(QUERY_KEY_POSITIONS);

export const apiGetPositions = async (params = {}) => {
  return getPositions.get('', false, params);
};
