
import React from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/Darkmode/Globalstyles";
import { lightTheme, darkTheme } from "./Components/Darkmode/Theme"
import './App.css';

import { useDarkMode } from './hooks/useDarkmode';
import Toggle from './Components/Darkmode/Toggler'


import UserAuth from './Components/UserAuth';


function App() {
  
  const [theme, themeToggler, mountedComponent] =useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyles/>
      <div className="App">
      <Toggle theme={theme} toggleTheme={themeToggler} />
      
        
        <UserAuth />
       
      
      
  
      </div>
    </>
    </ThemeProvider>
  );
}

export default App;
