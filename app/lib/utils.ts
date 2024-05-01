export const getQuestsArray = (source: Record<number, boolean> | undefined, length: number) => {

  return new Array(length)
    .fill(false)
    .map((cur, index) => (source || [])[index] || cur);
};
