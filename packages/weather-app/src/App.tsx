import React from 'react';
import logo from './logo.svg';
import './App.css';


import {  ExampleComponent, getCities} from "server-api";


function App() {
  console.log(getCities(), "getCities");
  return (
    <div className="App">
      
      <ExampleComponent text="module"/>
      Base App
     
    </div>
  );
}

export default App;
