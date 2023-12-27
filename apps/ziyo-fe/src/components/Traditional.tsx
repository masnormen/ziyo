'use client';

import Kyujitai from 'kyujitai';

export function Traditional({ children }: { children: string }) {
  return new Kyujitai(() => null).encode(children);
}
