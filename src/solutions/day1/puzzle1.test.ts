/**
 * Advent of Code 2020, D1P1
 */
import { solution } from "./puzzle1";

// Given example from website
const givenArray = [1721, 979, 366, 299, 675, 1456];
const givenArrayResult = 514579;
const failingArray = [1721, 979, 366, 300, 675, 1456];

describe("day1, puzzle 1", () => {
  it("should return given result with given input", () => {
    expect(solution(givenArray)).toBe(givenArrayResult);
  });

  it("should return -1 when no two numbers sum to 2020", () => {
    expect(solution(failingArray)).toBe(-1);
  });
});
