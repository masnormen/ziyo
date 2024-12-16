import { useQuery } from '@tanstack/react-query';
import type { TatoebaResponse } from '@ziyo/types';

export function useGetSentenceList({
  query,
}: {
  query: {
    character: string;
  };
}) {
  return useQuery({
    queryKey: ['sentence-list', query],
    queryFn: async () => {
      const res = await fetch(
        `https://api.tatoeba.org/unstable/sentences?lang=jpn&q=${decodeURIComponent(
          query.character,
        )}&trans=eng&include_unapproved=yes&sort=relevance&limit=20`,
      );

      return (await res.json()) as TatoebaResponse;
    },
    enabled: !!query.character && query.character.length > 0,
  });
}
