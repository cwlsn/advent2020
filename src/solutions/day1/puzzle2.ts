/**
 * Advent of Code 2020, D1P2
 * @param input An array of numbers
 * @returns Product of the two numbers that sum to 2020, or -1
 */
const solution = (input: number[]): number => {
  // 1. Sort the input into ascending order
  const sortedInput = input.sort((a, b) => a - b);
  // 2. Starting from the first number..
  for (let mainIndex = 0; mainIndex < sortedInput.length - 2; mainIndex++) {
    // 3. Create two pointers on far sides of the remaining array
    let left = mainIndex + 1;
    let right = sortedInput.length - 1;
    // 4. Stop moving the pointers if they become adjacent.
    // If we get to the point where the three numbers in question don't
    // sum to 2020, the array does not contain and answer, return -1
    while (left < right) {
      // Reusable values
      const current = sortedInput[mainIndex];
      const leftVal = sortedInput[left];
      const rightVal = sortedInput[right];
      const sum = current + leftVal + rightVal;
      // 5.
      if (sum === 2020) {
        return current * leftVal * rightVal;
      } else if (sum < 2020) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return -1;
};

export { solution };
