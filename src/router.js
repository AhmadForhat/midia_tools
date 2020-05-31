import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './App/pages/Home/index'
import About from './App/pages/About/index'
import Users from './App/pages/Users/index'
import Navbar from './App/components/Navbar'


export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </>
    </Router>
  );
}