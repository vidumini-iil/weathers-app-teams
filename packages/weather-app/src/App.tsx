import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD


import {  ExampleComponent, getCities} from "server-api";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  ExampleComponent} from "server-api";
import Home from "./pages/Home/Home"
import City from "./pages/City/City"
>>>>>>> f246de0cc6b3edd4cf79d78495560f67789c5cdf


function App() {
  console.log(getCities(), "getCities");
  return (
<<<<<<< HEAD
    <div className="App">
      
      <ExampleComponent text="module"/>
      Base App
     
    </div>
=======
    <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/city" component={City} />
            </Switch>
          </div>
        </Fragment>
      </Router>
>>>>>>> f246de0cc6b3edd4cf79d78495560f67789c5cdf
  );
}

export default App;
