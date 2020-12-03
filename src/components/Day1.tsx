import { fileToNumberArray } from "../utils/fileToNumberArray";
import { input } from "../input/day1";
import { solution as puzzle1 } from "../solutions/day1/puzzle1";
import { solution as puzzle2 } from "../solutions/day1/puzzle2";

function Day1() {
  const answer1 = puzzle1(fileToNumberArray(input));
  const answer2 = puzzle2(fileToNumberArray(input));

  return (
    <section>
      <h2>Day 1</h2>
      <h3>Puzzle 1</h3>
      <p>
        <code>{answer1}</code>
      </p>
      <h3>Puzzle 2</h3>
      <p>
        <code>{answer2}</code>
      </p>
    </section>
  );
}

export { Day1 };
