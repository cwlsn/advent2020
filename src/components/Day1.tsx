import { DayBox } from "./DayBox";
import { fileToNumberArray } from "../utils";
import { input } from "../input/day1";
import { solution as puzzle1 } from "../solutions/day1/puzzle1";
import { solution as puzzle2 } from "../solutions/day1/puzzle2";

function Day1() {
  const answer1 = puzzle1(fileToNumberArray(input));
  const answer2 = puzzle2(fileToNumberArray(input));

  return <DayBox dayNumber={1} answer1={answer1} answer2={answer2} />;
}

export { Day1 };
