import { cn } from '@ziyo/ui/utils';

export function Chip({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-2 py-1 text-xs font-bold text-gray-900 transition',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
