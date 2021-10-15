/**
 * Advent of Code 2020, D3P2
 */
import { solution, countTrees } from "./puzzle2"
import { directions } from "../../input/day3"

import * as puzzle2 from "./puzzle2"
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
.#..#...#.#`
const givenMapTrees = 7
const originalDirection = {
  right: 3,
  down: 1,
}
const downTwo = {
  right: 1,
  down: 2,
}
const givenFinalProduct = 336

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

// @ponicode
describe("puzzle2.countTrees", () => {
    test("0", () => {
        let callFunction: any = () => {
            puzzle2.countTrees({ input: "Anas", direction: { right: 100, down: -1.0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            puzzle2.countTrees({ input: "George", direction: { right: -100, down: 10.23 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            puzzle2.countTrees({ input: "Jean-Philippe", direction: { right: 100, down: 0.5 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            puzzle2.countTrees({ input: "Anas", direction: { right: 0, down: 1.0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            puzzle2.countTrees({ input: "Anas", direction: { right: -5.48, down: -29.45 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            puzzle2.countTrees({ input: "", direction: { right: Infinity, down: Infinity } })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("puzzle2.solution", () => {
    test("0", () => {
        let object: any = [{ right: -5.48, down: -0.5 }, { right: -5.48, down: 10.23 }, { right: -5.48, down: 10.23 }, { right: 0, down: 10.0 }]
        let callFunction: any = () => {
            puzzle2.solution({ input: "Edmond", directions: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object: any = [{ right: -5.48, down: 0.5 }, { right: 0, down: 10.23 }]
        let callFunction: any = () => {
            puzzle2.solution({ input: "Pierre Edouard", directions: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{ right: 1, down: -29.45 }, { right: -5.48, down: 10.0 }, { right: 1, down: 0.0 }, { right: -5.48, down: -1.0 }, { right: -5.48, down: 10.23 }]
        let callFunction: any = () => {
            puzzle2.solution({ input: "Michael", directions: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object: any = [{ right: 0, down: 10.0 }, { right: 0, down: 10.0 }, { right: -100, down: 0.0 }, { right: -5.48, down: 0.0 }, { right: 100, down: 0.0 }]
        let callFunction: any = () => {
            puzzle2.solution({ input: "Edmond", directions: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object: any = [{ right: -5.48, down: 10.0 }]
        let callFunction: any = () => {
            puzzle2.solution({ input: "Jean-Philippe", directions: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            puzzle2.solution({ input: "", directions: [] })
        }
    
        expect(callFunction).not.toThrow()
    })
})
