import { NumberMap } from "../types";
/**
 * Advent of Code 2020, D1P1
 * @param input An array of numbers
 * @returns Product of the two numbers that sum to 2020, or -1
 */
const solution = (input: number[]): number => {
  // 1. Take the first number out to start a map, rest to iterate
  const [first, ...rest] = input;
  // 2. key: 2020 - first, so when we do map[num] we find the pair
  // that sums to 2020
  const map: NumberMap = { [2020 - first]: first };
  // 3. Iterate the rest of the numbers, checking for valid pair
  for (const num of rest) {
    const search = map[num];
    // Explicitly check undefined, since 0 is falsey
    if (search !== undefined) {
      // 3a. We have found two numbers that sum to 2020!
      // Return their product
      return search * num;
    }
    // 3b. We have not found a valid pair, put current num in map
    map[2020 - num] = num;
  }
  return -1;
};

export { solution };
