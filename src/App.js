import logo from './logo.svg';
import './App.css';
import TestMap from './components/TestMap';
import { TestUseState } from './components/TestUseState';
import { TestUseEffect } from './components/TestUseEffect';

function App() {
  return (
    <div className="App">
     {/* <TestMap/> */}
     <TestUseState/>
     {/* <TestUseEffect/> */}
    </div>
  );
}

export default App;
