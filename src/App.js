
import React, { useContext } from 'react'
import './App.css'
//Components
import Header from './components/Header'
import Characters from './components/Characters'
//Context
import {ThemeContext} from './context/ThemeContext'

function App() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? 'dark': 'light'}>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
