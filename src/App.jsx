import React, { useState } from "react";
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';

function App() {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="black";
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
      <MainContent mode={mode} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
