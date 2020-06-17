import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './App/pages/Home/index'
import Login from './App/pages/Login/index'
import Cadastrar from './App/pages/Cadastrar'
import NotFound from './App/pages/NotFound'
import Dashboard from './App/pages/Dashboard'
import Navbar from './App/components/Navbar'
import NavbarLogin from './App/components/NavbarLogin'

const isLogged = true
export default function App() {
  if(isLogged){
    const perfilImagem = 'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4'
    const nome = 'AhmadForhat'
      return (
      <Router>
        <>
          <Switch>
            <Route exact path="/">
            <NavbarLogin title={'Dashboard'} perfilImg={perfilImagem} name={nome} /><Dashboard/>
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
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
        </>
    </Router>
  );
}