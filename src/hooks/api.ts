import { useRouter } from 'next/router';
import useSWR from 'swr';
import { SWR_DEFAULT_CONFIG } from '../config';
import { fetcher } from '../utils/fetcher';
import { queryToArr } from '../utils/query';

export const useProductOverview = () => {
  const { query } = useRouter();
  const complianceTypeIds = queryToArr(query?.complianceTypeIds).map((i) =>
    parseInt(i)
  );

  const stringifiedQuery = JSON.stringify({
    search: query?.search,
    complianceTypeIds,
  });

  const { data, isValidating, error } = useSWR(
    ['/product/search', stringifiedQuery],
    (url) =>
      fetcher(url, 'post', {
        searchText: query?.search,
        complianceTypeIds,
      }),
    {
      ...SWR_DEFAULT_CONFIG,
    }
  );

  return { data, loading: isValidating, error };
};
