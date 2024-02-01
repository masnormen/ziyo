import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ziyo/ui';
import { cn } from '@ziyo/ui/utils';
import { Volume2 } from 'lucide-react';
import { useRef } from 'react';

import { useAudioQuery } from '../hooks/query/useAudioQuery';
import useSettings from '../hooks/useSettings';
import { Chip } from './Chip';

export function ReadingChip({
  latin,
  text,
  voice,
  other,
  lang,
  className,
  ...props
}: {
  text: string;
  latin: string;
  voice: string | null;
  other?: string;
  lang?: string;
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const audio = useAudioQuery({
    text: text.replace('-', '').replace('.', ''),
    voice,
  });

  const {
    settings: { preferLatin },
  } = useSettings();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <Chip lang={lang} className={className}>
            {preferLatin ? latin : text}
          </Chip>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col items-center justify-center">
          {lang === 'ko' && (
            <span className="text-xs">*Might not be accurate</span>
          )}
          <div>
            {voice && (
              <audio
                ref={audioRef}
                className="mx-auto mt-2"
                id="audio"
                src={`data:audio/mpeg;base64,${audio.data?.data}`}
              >
                Umm, update your browser.
              </audio>
            )}

            <button
              type="button"
              className={cn(
                'flex flex-row items-center justify-center gap-1',
                !voice && 'cursor-default',
              )}
              onClick={() => {
                audioRef.current?.play().catch(() => {
                  setTimeout(() => audioRef.current?.play(), 1000);
                });
              }}
              lang={lang}
            >
              {other ? `${other} ` : ''}
              <span>/ {preferLatin ? text : latin.replace('.', '')} /</span>
              {voice && (
                <Volume2 className="stroke-[3] text-kiiro-800" size={16} />
              )}
            </button>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
