import useSWR from 'swr';
import { SWR_DEFAULT_CONFIG } from '../config';
import { fetcher } from '../utils/fetcher';

export const useProductOverview = () => {
  const { data, isValidating, error } = useSWR(
    ['/product/search'],
    (url) =>
      fetcher(url, 'post', {
        searchText: '',
      }),
    {
      ...SWR_DEFAULT_CONFIG,
    }
  );

  return { data, loading: isValidating, error };
};
