import { NEW_LINE } from "../../utils";

const TREE = "#";
/**
 * Advent of Code 2020, D3P1
 * @param {string} input Tessalting slope map with squares (.) and trees (#)
 * @returns {number} The amount of trees encounters when moving right 3, down 1
 */
const solution = (input: string): number => {
  // 1. Turn the map into an array of lines
  const lines = input.split(NEW_LINE);
  // 2. We start at the top left. We don't need a Y coord because reduce will
  // be going line by line (ie downhill)
  let x = 0;
  return lines.reduce((count, line) => {
    // 3. Check if the current position is a tree
    const isTree = line.charAt(x) === TREE;
    // 4. Since the map repeats to the right, modulus by the line length
    x = (x + 3) % line.length;
    // 5. Increase the count if we found a tree
    return isTree ? count + 1 : count;
  }, 0);
};

export { solution };
