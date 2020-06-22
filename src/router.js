
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './App/pages/Home/index'
import Login from './App/pages/Login/index'
import Cadastrar from './App/pages/Cadastrar'
import NotFound from './App/pages/NotFound'
import Dashboard from './App/pages/Dashboard'
import Navbar from './App/components/Navbar'
import NavbarLogin from './App/components/NavbarLogin'



export default function App() {
  const isLogged = localStorage.getItem('isLogged');
  if(isLogged){
      return (
      <Router>
        <>
          <Switch>
            <Route exact path="/:repo?">
            <Dashboard/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          </>
      </Router>
    )
  }
  
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
              <Navbar title={'Home'} /><Home />
          </Route>
          <Route path="/login">
            <Login />
            </Route>
            <Route path="/cadastrar">
              <Cadastrar />
            </Route>
            <Route path="/logado">
              <NotFound />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
        </>
    </Router>
  );
}