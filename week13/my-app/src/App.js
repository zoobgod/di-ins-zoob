import logo from './logo.svg';
import './App.css';
import Input from './components/ui/input.tsx'

//fonts
// import './fonts/Kablammo-Regular.ttf'
// import './fonts/Bebas-Neue.ttf'

import 'tachyons'
import KinoAll from './components/Kino.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import GuessMovie from './components/guessingGame.jsx';



function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
    
  );
  
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
    

    
      <h1 id='meetGreet'>Find something to watch</h1>

      <div id='InputChoiceOfMovies'>
        <input type='text' placeholder='Play the guessing game'/>
        <button>Guess!</button>
      </div>

      <KinoAll />
      <Input  />
      <GuessMovie />
      </ThemeProvider>
    </div>
  );
}

export default App;