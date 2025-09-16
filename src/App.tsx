import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './atoms/Header';
import { FaMoon, FaSun } from 'react-icons/fa6';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App" style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#1e1e2f' : 'white'}}>
      <Header onChange={(mode) => {setDarkMode(mode)}}/>
      <h1>Eilay Levi - Full Stack Developer</h1>
    </div>
  );
}

export default App;
