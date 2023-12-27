import { useQuery } from '@tanstack/react-query';

type TTSReturn = {
  data: string;
  success: boolean;
  error: null;
};

export function useAudioQuery({
  voice,
  text,
}: {
  voice: string;
  text: string;
}) {
  return useQuery({
    queryKey: ['audio', voice, text],
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
      ).then((res) => res.json())) as Promise<TTSReturn>;
      return res;
    },
    enabled: Boolean(voice && text),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
