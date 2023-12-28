import type { JSONValue } from 'hono/utils/types';

export function ok<T extends JSONValue>(data: T) {
  return {
    ok: true,
    data,
    message: 'success',
  } as const;
}

export function err<T extends Error>(error: T) {
  return {
    ok: false,
    errorId: error.name,
    message: error.message,
  } as const;
}
