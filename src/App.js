import logo from "./logo.svg";
import "./App.css";
import TestMap from "./components/TestMap";
import { TestUseState } from "./components/TestUseState";
import { TestUseEffect } from "./components/TestUseEffect";
import Parent from "./components/TestProps/Parent";

import DemoRouter from "./components/TestRouter/DemoRouter";



function App() {
  return (
    <div className="App">
      {/* <TestMap/> */}
      {/* <TestUseState/> */}
      {/* <TestUseEffect/> */}
      {/* <Parent /> */}
      <DemoRouter/>
     
      

    </div>
  );
}

export default App;
