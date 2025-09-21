import { useQuery } from '@tanstack/react-query';
import type { TatoebaResponse } from '@ziyo/types';

export function useGetSentenceList({
  query,
}: {
  query: {
    character: string;
    includeUnapproved?: boolean;
  };
}) {
  return useQuery({
    queryKey: ['sentence-list', query],
    queryFn: async () => {
      const url = new URL('https://api.tatoeba.org/unstable/sentences');
      const params = new URLSearchParams({
        lang: 'jpn',
        q: query.character,
        'trans:lang': 'eng',
        'trans:is_direct': 'yes',
        'showtrans:lang': 'eng',
        'showtrans:is_direct': 'yes',
        sort: 'relevance',
        limit: '15',
        ...(query.includeUnapproved ? { is_unapproved: 'yes' } : {}),
      });
      url.search = params.toString();

      const res = await fetch(url.toString());

      return (await res.json()) as TatoebaResponse;
    },
    enabled: !!query.character && query.character.length > 0,
  });
}
