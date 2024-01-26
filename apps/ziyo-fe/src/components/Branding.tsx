import { cn } from '@ziyo/ui/utils';
import Link from 'next/link';

export function Branding({ small = false }: { small?: boolean }) {
  return (
    <header>
      <Link
        href="/"
        className={cn(
          'font-bold text-kiiro-900 drop-shadow-lg',
          small ? 'text-4xl' : 'text-7xl',
        )}
      >
        <h1>
          ジヨ{' '}
          <span
            className={cn('text-kiiro-800', small ? 'text-lg' : 'text-2xl')}
          >
            ziyo
          </span>
        </h1>
      </Link>
    </header>
  );
}
