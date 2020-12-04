import { DayBox } from "./DayBox";
import { input } from "../input/day4";
import { solution as puzzle1 } from "../solutions/day4/puzzle1";
// import { solution as puzzle2 } from "../solutions/day3/puzzle2";

function Day4() {
  const answer1 = puzzle1(input);
  //   const answer2 = puzzle2({ input, directions });

  return <DayBox dayNumber={4} answer1={answer1} />;
}

export { Day4 };
