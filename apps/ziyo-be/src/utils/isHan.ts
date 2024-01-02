export const isHan = (str: string) =>
  /[\p{Unified_Ideograph}\u3006\u3007][\ufe00-\ufe0f\u{e0100}-\u{e01ef}]?/gu.test(
    str,
  );
