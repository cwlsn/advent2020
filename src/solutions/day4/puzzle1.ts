import { NEW_LINE } from "../../utils";

/**
 * Advent of Code 2020, D4P1
 * @param input
 */
const solution = (input: string): number => {
  // expected fields
  // byr (Birth Year)
  // iyr (Issue Year)
  // eyr (Expiration Year)
  // hgt (Height)
  // hcl (Hair Color)
  // ecl (Eye Color)
  // pid (Passport ID)
  // cid (Country ID)

  // validate we have all the fields
  // cid is optional others are not

  // break into an array of the key value pairs
  // try counting the keys?
  const passportsRaw = input.split("\n\n");
  const rawLines = passportsRaw
    .map((raw) => raw.trim().split(/\s+/))
    .reduce((outer, inner) => {
      const innerReduced = inner.reduce((obj, str) => {
        const [key, value] = str.split(":");
        if (key === "cid") {
          return obj;
        }
        return { ...obj, [key]: value };
      }, {});
      return [...outer, innerReduced];
    }, []);

  return rawLines.filter((x) => Object.keys(x).length >= 7).length;
};

export { solution };
