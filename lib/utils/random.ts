export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const randomInt = (min: number, max: number) =>
  Math.floor(random(min, max + 1));

export const randomDate = (start: Date, end: Date) =>
  new Date(random(start.getTime(), end.getTime()));

export const randomItem = <T>(array: readonly T[]): T =>
  array[randomInt(0, array.length - 1)];

export const randomSlice = <T>(
  array: readonly T[],
  length: number,
): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, length);
};