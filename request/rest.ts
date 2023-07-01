import { apiUrlByEnv } from '../config/config';
import { deleteEmptyProperties } from '../utils/deleteEmptyProperties';
import { isEmpty } from '../utils/isEmpty';
import { dataToURL } from '../utils/dataToUrl';

interface IRequestParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  isAuth?: boolean;
  token?: string;
  body?: any;
}

interface IOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers: Headers;
  body?: any;
}

interface IQueries {
  [key: string]: string;
}

export class REST {
  URL: string;
  constructor(entity = '', url = apiUrlByEnv) {
    this.URL = `${url}${entity ? `/${entity}` : ''}`;
  }

  request = async ({ url, method, isAuth, body, token }: IRequestParams) => {
    const options: IOptions = { method, headers: new Headers() };
    const { headers } = options;

    if (isAuth) {
      const _accessToken = token;
      if (_accessToken) {
        headers.append('Authorization', `Bearer ${_accessToken}`);
      }
    }

    if (body) {
      if (body instanceof FormData) {
        options.body = body;
        headers.append('Content-Type', 'multipart/form-data');
      } else {
        headers.append('Content-Type', 'application/json');
        options.body = JSON.stringify(body);
      }
    }

    const execute = async () => {
      const response = await fetch(url, options);

      const json = await response.json();
      if (!response.ok) {
        throw json;
      }

      return json;
    };

    return execute().catch(async (error = {}) => {
      throw error;
    });
  };

  get = (path = '', isAuth = false, _queries: IQueries = {}) => {
    const queries = deleteEmptyProperties(_queries);
    return this.request({
      url: `${this.URL}${path ? `/${path}` : ''}${
        isEmpty(queries) ? '' : '?' + dataToURL(queries)
      }`,
      method: 'GET',
      isAuth,
    });
  };

  post = (path = '', isAuth = false, body = {}, token = '') => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'POST',
      isAuth,
      body,
      token,
    });
  };

  put = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'PUT',
      isAuth,
      body,
    });
  };

  patch = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'PATCH',
      isAuth,
      body,
    });
  };

  delete = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'DELETE',
      isAuth,
      body,
    });
  };
}
