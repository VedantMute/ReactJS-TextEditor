import React, { useState } from "react";
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Alertmsg from "./Components/Alertmsg";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  
  const sendAlert = () => {
      setalert("sucess")
  }
  

  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="#27374D";
      document.body.style.transition="1s ease-out"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.transition="1s ease-out"
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <Alertmsg alert={"Alert aa gaya hai"}/>
      <MainContent mode={mode} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
