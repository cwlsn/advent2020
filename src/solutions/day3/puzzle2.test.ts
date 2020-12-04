/**
 * Advent of Code 2020, D3P2
 */
import { solution, countTrees } from "./puzzle2";
import { directions } from "../../input/day3";

// Given example from website
const givenMap = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
const givenMapTrees = 7;
const originalDirection = {
  right: 3,
  down: 1,
};
const downTwo = {
  right: 1,
  down: 2,
};
const givenFinalProduct = 336;

describe("day 3, puzzle 2", () => {
  it("should count 7 trees in the given example", () => {
    const input = givenMap;
    const direction = originalDirection;
    expect(countTrees({ input, direction })).toBe(givenMapTrees);
  });

  it("should count 2 trees in the given example when moving right 1, down 1", () => {
    const input = givenMap;
    const direction = downTwo;
    expect(countTrees({ input, direction })).toBe(2);
  });

  it("should compute the product of each of the given directions", () => {
    const input = givenMap;
    expect(solution({ input, directions })).toBe(givenFinalProduct);
  });
});
