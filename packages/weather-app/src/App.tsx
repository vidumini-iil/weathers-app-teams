import React, { Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import SearchBar from "../src/components/SearchBar";

import { getCities } from "server-api";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import City from "./pages/City/City";

function App() {
    // console.log(
    //   getCities().then((res) => {
    //     console.log(res);
    //   })
    // );
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/city/:city" component={City} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
