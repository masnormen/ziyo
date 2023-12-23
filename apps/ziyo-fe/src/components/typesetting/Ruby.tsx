'use client';
import type { ReactNode } from 'react';

type RubyProps = {
  children: ReactNode;
  furi: string;
};

export function Ruby({ children, furi }: RubyProps) {
  return (
    <ruby className="[ruby-align:space-between]">
      {children}
      <rp>(</rp>
      <rt className="text-[10px] font-medium tracking-[-0.15em]">{furi}</rt>
      <rp>)</rp>
    </ruby>
  );
}
