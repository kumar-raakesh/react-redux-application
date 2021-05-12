// import logo from "./logo.svg";
import React, { Component } from "react";
// import axios from "axios";
// import Example from "./Example";
import Home from "./components/Home";
// import About from "./components/About";
// import Career from "./components/Carrer";
import CommonContainer from "./container/CommonContainer";

import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

let history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={CommonContainer(Home)} />
          <Route exact path="/home" component={CommonContainer(Home)} />
        </Switch>
      </Router>
    );
  }
}
export default App;
