import { useQuery } from '@tanstack/react-query';

export function useKanjiSearch({ search }: { search: string }) {
  return useQuery({
    queryKey: ['search', search],
    queryFn: async () => {
      const res = (await fetch(
        'https://tiktok-tts.weilnet.workers.dev/api/generation',
        {
          method: 'POST',
          body: JSON.stringify({
            text: text,
            voice: voice,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then((res) => res.json())) as Promise<TextToSpeechResponse>;
      return res;
    },
    enabled: Boolean(voice && text),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
