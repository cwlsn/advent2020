/**
 * Advent of Code 2020, D2P1
 */
import { solution } from "./puzzle1";

// Given example from website
const givenArray = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
const givenArrayResult = 2;
const failingArray = [
  "1-3 f: abcde", // not present
  "2-3 c: cdefg", // not enough
  "2-7 c: ccccccccc", // too many
];

describe("day 2, puzzle 1", () => {
  it("should find 2 valid passwords in the given array", () => {
    expect(solution(givenArray)).toBe(givenArrayResult);
  });

  it("should find no valid passwords in the failing array", () => {
    expect(solution(failingArray)).toBe(0);
  });
});
