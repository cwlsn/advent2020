/**
 * Advent of Code 2020, D1P1
 */
import { solution } from "./puzzle1";

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
const everyTree = `#.....
...#..
#.....
...#..`;
const zeroTrees = `
......
......
......
......
`;

describe("day 3, puzzle 1", () => {
  it("should encounter 7 trees in the given example", () => {
    expect(solution(givenMap)).toBe(givenMapTrees);
  });

  it("should hit every tree", () => {
    expect(solution(everyTree)).toBe(4);
  });

  it("should hit no trees", () => {
    expect(solution(zeroTrees)).toBe(0);
  });
});
