import type { JSONValue } from 'hono/utils/types';

export function ok<T extends JSONValue>(data: T) {
  return {
    ok: true,
    data,
    message: 'success',
  } as const;
}

export function okPagination<
  TData extends Array<{ total_count?: number; [key: string]: unknown }>,
>({
  data,
  limit,
  offset,
  total,
}: {
  data: TData;
  limit: number;
  offset: number;
  total?: number;
}) {
  const _total = (() => {
    if (total !== undefined) return total;
    const count = data.at(0)?.total_count ?? 0;
    return count;
  })();

  return {
    ok: true,
    data: {
      docs: data,
      page: Math.ceil(offset / limit) + 1,
      totalDocs: _total,
      totalPages: Math.ceil(_total / limit),
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
