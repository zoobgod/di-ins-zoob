import {useState} from 'react'
import './App.css';
import Child from './components/child.js';
import Parent from './components/parent'
import Counter from './components/Counter.js'
import ErrorBoundary from './components/ErrorBoundary.js';

const App = (props) => {
  // const [email, setEmail] = useState('')
  // const [pass, setPass] = useState('')
  const [inputsValues, setInputsValues] = useState({
    email:'',
    pass:'',
    yesno: null,
    color: null
  })
  const handleChange=(e) => {
    // console.log(e.target.name, e.target.value)
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
    setInputsValues({...inputsValues, [e.target.name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  console.log(inputsValues)}
  //   fetch(api, {
  //     method:'POST',
  //     headers: {
  //       'content-type':'application/json'
  //     },
  //     body: JSON.stringify({email, pass})
  //   })
  // }
  // const [text, setText] = useState('text')
  return (
    <div className="App">
      <header className="App-header">
     <form onSubmit={handleSubmit}>
     <input type='email' name='email' onChange={(e)=> handleChange(e)}/>
     <input type='password' name='pass' onChange={(e)=> handleChange(e)}/>
     <input type='checkbox' name='yesno' onChange={(e)=> handleChange(e)} />
     <select name='color' onChange={(e)=> handleChange(e)}>
      <option value='red'>red</option>
      <option value='green'>green</option>
      <option value='blue'>blue</option>
     </select>
     <input type='submit' value='submit'/>
     

     </form>
     
      </header>
    </div>
  );
}

export default App;


// <ErrorBoundary> 
// <Counter />
// </ErrorBoundary>
// <ErrorBoundary> 
// <Counter />
// </ErrorBoundary>
  
