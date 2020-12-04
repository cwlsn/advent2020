import { DayBox } from "./DayBox";
import { input } from "../input/day3";
import { solution as puzzle1 } from "../solutions/day3/puzzle1";
// import { solution as puzzle2 } from "../solutions/day2/puzzle2";

function Day3() {
  const answer1 = puzzle1(input);
  //   const answer2 = puzzle2(fileToStringArray(input));

  return <DayBox dayNumber={3} answer1={answer1} />;
}

export { Day3 };
