import { hc } from 'hono/client';

import type { BackendType } from '~api-types';

const { api } = hc<BackendType>(process.env.NEXT_PUBLIC_API_URL!);

export { api };
