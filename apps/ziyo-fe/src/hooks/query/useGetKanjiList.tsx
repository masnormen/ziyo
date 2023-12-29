import { useQuery } from '@tanstack/react-query';

import { api } from '../../lib/api';

export function useGetKanjiList({
  query,
}: {
  query: Parameters<typeof api.kanji.list.$get>[0]['query'];
}) {
  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      const res = await api.kanji.list.$get({
        query,
      });
      return res.json();
    },
    enabled: !!query.search && query.search.length > 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
