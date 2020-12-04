import "./App.scss";

import { Day1 } from "./components/Day1";
import { Day2 } from "./components/Day2";
import { Day3 } from "./components/Day3";

function App() {
  return (
    <main>
      <h1>🎄 Advent of Code 2020 💻</h1>
      <Day3 />
      <Day2 />
      <Day1 />
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
      <footer>
        Code at{" "}
        <a href="https://github.com/cwlsn/advent2020">cwlsn/advent2020</a>.
        Snowflakes from{" "}
        <a href="https://pajasevi.github.io/CSSnowflakes/">CSSnowflakes</a>
      </footer>
    </main>
  );
}

export default App;
