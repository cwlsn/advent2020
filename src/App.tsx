import "./App.scss";

import { Day1 } from "./components/Day1";
import { Day2 } from "./components/Day2";
import { Day3 } from "./components/Day3";

function App() {
  return (
    <main>
      <h1>Advent of Code 2020</h1>
      <Day3 />
      <Day2 />
      <Day1 />
    </main>
  );
}

export default App;
