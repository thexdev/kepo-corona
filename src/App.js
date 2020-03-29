import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/home.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default memo(App);
