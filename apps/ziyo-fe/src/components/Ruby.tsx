import { isHan } from '@scriptin/is-han';
import { cn } from '@ziyo/ui/utils';
import Link from 'next/link';
import { Fragment } from 'react';
import { toRomaji } from 'wanakana';

import useSettings from '../hooks/useSettings';

type RubyProps = {
  rubyString: string;
  currentChar: string;
};

export function Ruby({ rubyString, currentChar }: RubyProps) {
  const {
    settings: { preferLatin },
  } = useSettings();

  const parts = rubyString.split(/\[(.*?)\]/g);

  const elements = parts.map((part, index) => {
    if (index % 2 === 1) {
      const [word, ..._readings] = part.split('|') as [string, ...string[]];

      const readings = preferLatin
        ? _readings.map((r) => toRomaji(r))
        : _readings;

      if (word.length !== readings.length) {
        return (
          <ruby key={index}>
            {Array.from(word).map((char) => (
              <Fragment key={char}>
                {isHan(char) ? (
                  <Link
                    href={`/kanji/${char}`}
                    className="decoration-clone text-kiiro-800 underline decoration-kiiro-700 underline-offset-4 hover:no-underline"
                  >
                    {char}
                  </Link>
                ) : (
                  char
                )}
              </Fragment>
            ))}
            <rp>(</rp>
            <rt className="-translate-y-0.5 text-[11px] text-kiiro-950">
              {readings.join()}
            </rt>
            <rp>)</rp>
          </ruby>
        );
      }

      return readings.map((reading, i) => (
        <ruby key={i}>
          {isHan(word[i]!) ? (
            <Link
              href={`/kanji/${word[i]}`}
              className={cn(
                'decoration-clone text-kiiro-800 underline decoration-kiiro-700 underline-offset-4 hover:no-underline',
                currentChar === word[i] ? 'text-kiiro-700' : 'text-kiiro-900',
              )}
            >
              {word[i]}
            </Link>
          ) : (
            word[i]
          )}
          <rp>(</rp>
          <rt
            className={cn(
              'text-[11px] text-kiiro-950',
              !preferLatin && 'tracking-[-0.15em]',
            )}
          >
            {reading}
          </rt>
          <rp>)</rp>
        </ruby>
      ));
    } else {
      // For other parts, return plain text if preferLatin is false
      if (!preferLatin) return part;
      return (
        <ruby key={index}>
          {part}
          <rp>(</rp>
          <rt className="text-[11px] text-kiiro-950">{toRomaji(part)}</rt>
          <rp>)</rp>
        </ruby>
      );
    }
  });

  return <span className="leading-9">{elements}</span>;
}
