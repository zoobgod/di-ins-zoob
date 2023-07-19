
import {createContext, useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import MathCalc from './components/MathCalculator';

export const AppContext = createContext(null);

const App = (props) => {
   
  const [count, setCount] = useState(0)
  const name_input = useRef(null)
  const name = useRef('John')

  const handleClick = () => {
    // console.log(name_input.current.value)
    name.current = name_input.current.value
    console.log('nameRef >>>>>', name)
  }
  return (
    <div className="App">
      <header className="App-header">
      <MathCalc />
      </header>
    </div>
    // <AppContext.Provider value={{count, setCount}}>
    // <div className="App">
    //   <header className="App-header">
    //     <Counter/>
    //     <input ref={name_input} type='text' placeholder='Enter your name'/>
    //     <button onClick={handleClick}>Click</button>
        
    //   </header>
    // </div>
    // </AppContext.Provider>
  );
}

export default App;
