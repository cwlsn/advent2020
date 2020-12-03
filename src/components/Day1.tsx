import { fileToNumberArray } from "../utils/fileToNumberArray";
import { input } from "../input/day1";
import { solution as puzzle1 } from "../solutions/day1/puzzle1";

function Day1() {
  const answer1 = puzzle1(fileToNumberArray(input));

  return (
    <section>
      <h1>Day 1</h1>
      <h2>Puzzle 1</h2>
      <p>{answer1}</p>
    </section>
  );
}

export { Day1 };
