# Advent of Code 2020

> **Disclaimer!** This just represents how I went about the problems. There's no right or wrong way, and efficiency doesn't really matter in this situation. If you're stuck there's a subreddit and Slack groups, and if you want to know why I did something weird feel free to tweet me @_cwlsn. I also Googled like crazy.

This is a TypeScript implementation of the [Advent of Code 2020](https://adventofcode.com/2020), with as many solutions as I get around to.

## See Answers and Pagentry

Run the app (bootstrapped with CRA) by installing dependencies and starting the app locally. The answers app also has some festive decorations.

```
$ yarn install
$ yarn start
```

## Develop With This Format

If you're interested in tackling some of the puzzles on your own and want to use this kind of format, this was vaguely my process.

1. Each day of puzzles gets its own folder in `/src/solutions`
1. Copy the input into `src/input` in the same way as the other files.
1. Export a function named `solution` from a file in this new directory like `puzzle1.ts`.
1. Copy the given test case into a test file like `puzzle1.test.ts` and setup your first test. You can copy/paste from a previous day to get started.
1. Run `yarn test` and write your solution until you can get the given test to pass.
1. At this point I usually added some extra tests, but AoC doesn't really need anything besides the right answer.
1. Create a components like `DayX.tsx` in `src/components` in the style of the other days to put the answer on the screen (alternatively just console.log it somewhere if you don't care about the output app).
1. Submit your answer on the AoC site and make adjustments if you need to!