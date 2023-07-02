import logo from './logo512.png';
import './App.css';
import QuestionFormatter from './components/input.js';
import Timeline from './components/timeline.js';


function App() {
  return (
    <div className="App">
       <div className="header-left">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 id='nameWeb'>Редактор тестов</h1>
  </div>
   
      <header className="App-header">
     
      <QuestionFormatter />
      <Timeline />
      </header>
    </div>
  );
}

export default App;
