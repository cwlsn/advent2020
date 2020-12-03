import { NEW_LINE } from "../../utils";

type IsValidPassword = {
  policy: string;
  password: string;
};
/**
 * Check if a password is valid based on policy
 * @param options
 * @property {string} options.policy The password policy indicates the lowest
 * and highest number of times a given letter must appear for the password to
 * be valid. For example, 1-3 a means that the password must contain a at least
 * 1 time and at most 3 times.
 * @property {string} options.password The user's password
 * @returns {boolean} If password is valid based on policy
 */
const isValidPassword = ({ policy, password }: IsValidPassword): boolean => {
  // 1. Parse out the pieces of the policy
  const [counts, letter] = policy.split(" ");
  const [low, high] = counts.split("-");
  // 2. Use RegExp to match all instances of a variable and count
  const letterRegExp = new RegExp(letter, "g");
  const amountOfLetter = (password.match(letterRegExp) || []).length;
  // 3. Return true if in bounds, false otherwise
  if (parseInt(low) <= amountOfLetter && amountOfLetter <= parseInt(high)) {
    return true;
  }
  return false;
};
/**
 * Counts the amount of valid passwords based on policy
 * @param {string[]} input Line containing policy and password
 * @returns {number} Amount of valid passwords
 */
const solution = (input: string[]): number => {
  // 1. For each line, call isValidPassword and adjust count if valid
  return input.reduce((count, line) => {
    const [policy, password] = line.split(": ");
    return isValidPassword({ policy, password }) ? count + 1 : count;
  }, 0);
};

export { solution };
