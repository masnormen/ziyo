import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '../../lib/api';

export function useGetKanjiList({
  query,
}: {
  query: Parameters<typeof api.kanji.list.$get>[0]['query'];
}) {
  const infiniteQuery = useInfiniteQuery({
    queryKey: ['kanji-list', query],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.kanji.list.$get({
        query: {
          limit: String(10),
          ...query,
          offset: ((pageParam - 1) * Number(query.limit ?? 10)).toString(),
        },
      });
      return res.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.data) return undefined;
      if (lastPage.data.page < lastPage.data.totalPages) {
        return lastPage.data.page + 1;
      }
      return undefined;
    },
    enabled: !!query.search && query.search.length > 0,
  });

  const result =
    infiniteQuery.data?.pages.flatMap((page) => page.data?.docs ?? []) ?? [];

  return {
    ...infiniteQuery,
    result,
  };
}
