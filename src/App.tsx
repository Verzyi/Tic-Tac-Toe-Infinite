import Board from "./components/board.tsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>
          <span style={{ fontSize: "48px", color: "red" }}>T</span>
          <span style={{ fontSize: "36px", color: "blue" }}>i</span>
          <span style={{ fontSize: "36px", color: "blue" }}>c</span>
          <span> </span>
          <span style={{ fontSize: "48px", color: "red" }}>T</span>
          <span style={{ fontSize: "36px", color: "blue" }}>a</span>
          <span style={{ fontSize: "36px", color: "blue" }}>c</span>
          <span> </span>
          <span style={{ fontSize: "48px", color: "red" }}>T</span>
          <span style={{ fontSize: "36px", color: "blue" }}>o</span>
          <span style={{ fontSize: "36px", color: "blue" }}>e</span>
          <span> </span>
          <span style={{ fontSize: "48px", color: "red" }}>I</span>
          <span style={{ fontSize: "36px", color: "blue" }}>n</span>
          <span style={{ fontSize: "36px", color: "blue" }}>f</span>
          <span style={{ fontSize: "36px", color: "blue" }}>i</span>
          <span style={{ fontSize: "36px", color: "blue" }}>n</span>
          <span style={{ fontSize: "36px", color: "blue" }}>i</span>
          <span style={{ fontSize: "36px", color: "blue" }}>t</span>
          <span style={{ fontSize: "36px", color: "blue" }}>e</span>
        </h1>

        <Board />
      </div>
    </>
  );
}

export default App;
