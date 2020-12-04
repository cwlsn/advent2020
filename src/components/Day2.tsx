import { DayBox } from "./DayBox";
import { fileToStringArray } from "../utils";
import { input } from "../input/day2";
import { solution as puzzle1 } from "../solutions/day2/puzzle1";
import { solution as puzzle2 } from "../solutions/day2/puzzle2";

function Day2() {
  const answer1 = puzzle1(fileToStringArray(input));
  const answer2 = puzzle2(fileToStringArray(input));

  return <DayBox dayNumber={2} answer1={answer1} answer2={answer2} />;
}

export { Day2 };
