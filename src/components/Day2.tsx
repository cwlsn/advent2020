import { fileToStringArray } from "../utils";
import { input } from "../input/day2";
import { solution as puzzle1 } from "../solutions/day2/puzzle1";
// import { solution as puzzle2 } from "../solutions/day1/puzzle2";

function Day2() {
  const answer1 = puzzle1(fileToStringArray(input));

  return (
    <section>
      <h2>Day 2</h2>
      <h3>Puzzle 1</h3>
      <p>
        <code>{answer1}</code>
      </p>
    </section>
  );
}

export { Day2 };
