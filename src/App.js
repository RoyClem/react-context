import React, { useState } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import ThemeContext from './ThemeContext'
import MainWithClass from './MainWithClass'
import MainWithClassConsumer from './MainWithClassConsumer'
import Header from './Header'
import MainWithFunction from './MainWithFunction'

function App() {
  
  const themeHook = useState("light");

  return (
      <ThemeContext.Provider value = {themeHook}>
      <div>
        <Header />
        <MainWithFunction />
      </div>
    </ThemeContext.Provider>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
