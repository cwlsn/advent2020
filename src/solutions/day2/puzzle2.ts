import { IsValidPassword } from "./types";
/**
 * Check if a password is valid based on policy
 * @param options
 * @property {string} options.policy Each policy actually describes two
 * positions in the password, where 1 means the first character, 2 means the
 * second character, and so on. Exactly one of these positions must contain the
 * given letter. Other occurrences of the letter are irrelevant for the
 * purposes of policy enforcement.
 * @property {string} options.password The user's password
 * @returns {boolean} If password is valid based on policy
 */
const isValidPassword = ({ policy, password }: IsValidPassword): boolean => {
  // 1. Parse out the pieces of the policy
  const [positions, letter] = policy.split(" ");
  // "Positions" in the password are 1-indexed
  const [first, second] = positions.split("-").map((num) => parseInt(num) - 1);
  const firstPositionMatch = password.charAt(first) === letter;
  const secondPositionMatch = password.charAt(second) === letter;
  // 2. Return true if the two positions are XOR
  return firstPositionMatch ? !secondPositionMatch : secondPositionMatch;
};
/**
 * Advent of Code 2020, D2P2
 * @param {string[]} input Lines containing policy and password
 * @returns {number} Amount of valid passwords
 */
const solution = (input: string[]): number => {
  // This is the same as Puzzle 1, but isValidPassword will change
  // 1. For each line, call isValidPassword and adjust count if valid
  return input.reduce((count, line) => {
    const [policy, password] = line.split(": ");
    return isValidPassword({ policy, password }) ? count + 1 : count;
  }, 0);
};

export { solution };
