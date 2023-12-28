// eslint-disable-next-line @nx/enforce-module-boundaries
import type { AppType } from '@ziyo/be';
import { hc } from 'hono/client';

export const api = hc<AppType>('http://127.0.0.1:3000/');
