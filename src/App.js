
import React, { useState } from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/Darkmode/Globalstyles";
import { lightTheme, darkTheme } from "./Components/Darkmode/Theme"
import './App.css';
import Title from './Components/Title';
import { useDarkMode } from './hooks/useDarkmode';
import Toggle from './Components/Darkmode/Toggler'
import UploadForm from './Components/UploadForm';
import Imagegrid from './Components/Imagegrid';
import Modal from './Components/Modal';

function App() {
  
  const [theme, themeToggler, mountedComponent] =useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const[selected,setSelected]=useState(null)
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyles/>
      <div className="App">
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Title />
      <UploadForm />
      <Imagegrid setSelected={setSelected}/>
      {selected && <Modal selected={selected} setSelected={setSelected} />}
      </div>
  
      
    </>
    </ThemeProvider>
  );
}

export default App;
