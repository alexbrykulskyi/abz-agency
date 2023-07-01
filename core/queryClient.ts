import { QueryCache, QueryClient } from 'react-query';

export const queryCache = new QueryCache();

export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: 1,
    },
  },
});
