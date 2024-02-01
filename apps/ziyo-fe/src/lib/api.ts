import type { BackendType } from 'BackendType';
import { hc } from 'hono/client';

export const { api } = hc<BackendType>(process.env.NEXT_PUBLIC_API_URL!);
