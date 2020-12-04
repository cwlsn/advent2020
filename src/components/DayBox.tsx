interface DayBoxProps {
  dayNumber: number;
  answer1?: number;
  answer2?: number;
}

function DayBox({ dayNumber, answer1, answer2 }: DayBoxProps) {
  return (
    <section>
      <h2>Day {dayNumber}</h2>
      {answer1 && (
        <>
          <h3>Puzzle 1</h3>
          <p>
            <code>{answer1}</code>
          </p>
        </>
      )}
      {answer2 && (
        <>
          <h3>Puzzle 2</h3>
          <p>
            <code>{answer2}</code>
          </p>
        </>
      )}
    </section>
  );
}

export { DayBox };
