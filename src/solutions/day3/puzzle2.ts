import { NEW_LINE } from "../../utils";
import { TREE } from "./puzzle1";

type Direction = {
  right: number;
  down: number;
};

type CountTrees = {
  input: string;
  direction: Direction;
};

type Solution = {
  input: string;
  directions: Direction[];
};

/**
 * Count the amount of trees encountered given the direction
 * @param {CountTrees} options
 * @property {string} input The map of trees and squares
 * @property {Direction} direction Directions of how to move
 */
const countTrees = ({ input, direction }: CountTrees): number => {
  // 1. For part 2, the slope/directions are variable
  const { right, down } = direction;
  // 2. Turn the map into an array of lines
  const lines = input.split(NEW_LINE);
  // 3. We still start at the top left
  let x = 0;
  return lines.reduce((count, line, y) => {
    // 4. If we are skipping the line (ie down = 2), just return
    if (y % down !== 0) {
      return count;
    }
    // 5. Check if the current position is a tree
    const isTree = line.charAt(x) === TREE;
    // 5. Increase the x coord by the given direction
    x = (x + right) % line.length;
    // 6. Increase the count if we found a tree
    return isTree ? count + 1 : count;
  }, 0);
};
/**
 * Advent of Code 2020, D3P2
 * @param {Solution} options
 * @property {string} options.input The map of trees and squares
 * @property {Direction[]} options.directions Array of directions
 * @returns {number} The amount of trees encounters when moving right 3, down 1
 */
const solution = ({ input, directions }: Solution): number => {
  // 1. Run through each set of directions and multiply the growing product by
  // the tree count
  return directions.reduce(
    (product, direction) => product * countTrees({ input, direction }),
    1
  );
};

export { solution, countTrees };
