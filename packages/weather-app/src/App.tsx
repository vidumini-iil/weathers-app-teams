import React from 'react';
import logo from './logo.svg';
import './App.css';


import {  ExampleComponent} from "server-api";


function App() {
  return (
    <div className="App">
      
      <ExampleComponent text="module"/>
      Base App
      
    </div>
  );
}

export default App;
