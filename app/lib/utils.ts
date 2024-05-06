export const getQuestsArray = (source: Record<number, number> | undefined, length: number, counts: Record<number, number> = {}): boolean[] => {

  return new Array(length)
    .fill(false)
    .map((cur, index) => (source || [])[index] || cur).map((curr, index) => curr >= (counts[index] ?? 1));
};
