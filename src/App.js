import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "pages/about.js";
import Home from "pages/home.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default memo(App);
