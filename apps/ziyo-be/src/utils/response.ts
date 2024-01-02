import type { JSONValue } from 'hono/utils/types';

export function ok<T extends JSONValue>(data: T) {
  return {
    ok: true,
    data,
    message: 'success',
  } as const;
}

export function okPagination<
  TData extends Array<TObject>,
  TObject extends { total_count?: number },
>({ data, limit, offset }: { data: TData; limit: number; offset: number }) {
  const total = data.length > 0 ? data[0].total_count ?? 0 : 0;
  return {
    ok: true,
    data: {
      docs: data,
      page: Math.ceil(offset / limit) + 1,
      totalDocs: total,
      totalPages: Math.ceil(total / limit),
    },
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
