import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './App/pages/Home/index'
import About from './App/pages/About/index'
import Users from './App/pages/Users/index'
import Login from './App/pages/Login/index'
import Cadastrar from './App/pages/Cadastrar'
import NotFound from './App/pages/NotFound'
import Navbar from './App/components/Navbar'


export default function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
              <Navbar title={'Home'}/><Home />
          </Route>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <Navbar title={'About'}/><About />
            </Route>
            <Route path="/users">
              <Navbar title={'Users'}/><Users />
            </Route>
            <Route path="/cadastrar">
              <Cadastrar />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
        </>
    </Router>
  );
}