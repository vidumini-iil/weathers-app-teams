import React from 'react';
import logo from './logo.svg';
import './App.css';


import {  ExampleComponent} from "server-api";

import  SearchBar  from "../src/components/SearchBar";


function App() {
  return (
    <div className="App">
      
      <ExampleComponent text="module"/>
      <SearchBar/>
        Base Apps
      
    </div>
  );
}

export default App;
