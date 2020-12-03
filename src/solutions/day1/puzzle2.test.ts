/**
 * Advent of Code 2020, D1P2
 */
import { solution } from "./puzzle2";

// Given example from website
const givenArray = [1721, 979, 366, 299, 675, 1456];
const givenArrayResult = 241861950;
const failingArray = [1721, 980, 366, 299, 675, 1456];

describe("day 1, puzzle 2", () => {
  it("should return given result with given input", () => {
    expect(solution(givenArray)).toBe(givenArrayResult);
  });

  it("should return -1 when no three numbers sum to 2020", () => {
    expect(solution(failingArray)).toBe(-1);
  });
});
