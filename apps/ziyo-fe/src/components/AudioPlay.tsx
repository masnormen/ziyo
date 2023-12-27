'use client';

import { Volume2 } from 'lucide-react';
import { useRef } from 'react';

import { useAudioQuery } from '../hooks/query/useAudioQuery';

export function AudioPlay({
  children,
  latin,
  text,
  voice,
  other,
  ...props
}: JSX.IntrinsicElements['button'] & {
  text: string;
  latin: string;
  voice: string;
  other?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const audio = useAudioQuery({
    text: text.replace('-', '').replace('.', ''),
    voice,
  });

  return (
    <div>
      <audio
        ref={audioRef}
        className="mx-auto mt-2"
        id="audio"
        src={`data:audio/mpeg;base64,${audio.data?.data}`}
      >
        Umm, update your browser.
      </audio>

      <button
        type="button"
        className="flex flex-row items-center justify-center gap-1"
        onClick={() => {
          audioRef.current?.play().catch(() => {
            setTimeout(() => audioRef.current?.play(), 1000);
          });
        }}
        {...props}
      >
        {other ? `${other} ` : ''}/{latin}/ <Volume2 size={16} />
      </button>
    </div>
  );
}
