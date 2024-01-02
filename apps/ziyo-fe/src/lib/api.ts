/* eslint-disable @nx/enforce-module-boundaries */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - ignore
import type { AppType } from '@ziyo/be';
import { hc } from 'hono/client';

export const { api } = hc<AppType>('http://127.0.0.1:3000/');
