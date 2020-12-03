export const NEW_LINE = /\r?\n/;
/**
 * Create an array of numbers from an input file
 * @param {string} input File with one number per line
 * @returns {number[]} An array of numbers
 */
const fileToNumberArray = (input: string): number[] => {
  return input.split(NEW_LINE).map((stringNum) => parseInt(stringNum));
};
/**
 * Create an array of string from an input file
 * @param {string} input File contents
 * @returns {string[]} An array of strings
 */
const fileToStringArray = (input: string): string[] => {
  return input.split(NEW_LINE).map((line) => line.trim());
};

export { fileToNumberArray, fileToStringArray };
