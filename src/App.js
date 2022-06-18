import logo from "./logo.svg";
import "./App.css";
import TestMap from "./components/TestMap";
import { TestUseState } from "./components/TestUseState";
import { TestUseEffect } from "./components/TestUseEffect";
import Parent from "./components/TestProps/Parent";
function App() {
  return (
    <div className="App">
      {/* <TestMap/> */}
      {/* <TestUseState/> */}
      {/* <TestUseEffect/> */}
      <Parent />
    </div>
  );
}

export default App;
