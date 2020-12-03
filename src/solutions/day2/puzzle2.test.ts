/**
 * Advent of Code 2020, D2P2
 */
import { solution } from "./puzzle2";

// Given example from website
const givenArray = [
  "1-3 a: abcde", // valid: a in 1
  "1-3 b: cdefg", // invalid: no b in 1 or 3
  "2-9 c: ccccccccc", // invalid: c in both 2 and 9
];
const givenArrayResult = 1;
const failingArray = ["1-3 f: abcde", "2-3 c: cdefg", "2-7 c: ccccccccc"];

describe("day 2, puzzle 1", () => {
  it("should find 1 valid passwords in the given array", () => {
    expect(solution(givenArray)).toBe(givenArrayResult);
  });

  it("should find no valid passwords in the failing array", () => {
    expect(solution(failingArray)).toBe(0);
  });
});
