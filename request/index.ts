import { REST } from './rest';

export const restRequest = (route: string) => {
  return new REST(route);
};
