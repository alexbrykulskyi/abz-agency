// Utils

import { createApiUrl } from '../utils/createApiUrl';

export const name = 'request';
export const apiName = 'api';
export const apiVersion = 'v1';

export const apiProtocol = 'https';
export const apiDomain = 'frontend-test-assignment-api.abz.agency';
export const apiPort = '';
export const apiUrlByEnv = createApiUrl(
  apiProtocol,
  apiDomain,
  apiPort,
  apiName,
  apiVersion
);

export const config = {
  name,
  apiName,
  apiVersion,
  apiUrlByEnv,
};

export default config;
