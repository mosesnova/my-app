import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {
  const [count,setCount] = useState(0);
 
  function increment()
  {
    setCount(count+1); // overload
    
  }
  const test = (()=> {return "State Hooks and Interpolation"});
  test();
  console.log(test());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <button onClick={increment}>increment{count}</button>
          Edit <code>src/App.js</code> and state Hooks save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
