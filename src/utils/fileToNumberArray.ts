/**
 * Create an array of numbers from an input file
 * @param input File with one number per line
 * @returns An array of numbers
 */
const fileToNumberArray = (input: string): number[] => {
  return input.split(/\r?\n/).map((stringNum) => parseInt(stringNum, 10));
};

export { fileToNumberArray };
