import { cn } from '@ziyo/ui/utils';

export function Chip({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  return (
    <span
      className={cn(
        'inline-block cursor-default whitespace-nowrap rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm transition',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
