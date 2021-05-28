import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';


import  SearchBar  from "../src/components/SearchBar";

import {  ExampleComponent, getCities} from "server-api";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  ExampleComponent} from "server-api";
import Home from "./pages/Home/Home"
import City from "./pages/City/City"


function App() {
  console.log(getCities(), "getCities");
  return (


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
  );
}

export default App;
