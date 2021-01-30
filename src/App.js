import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import User from './Pages/User/User'
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dasbor from './Pages/Dasbor/Dasbor'

import {ThemeProvider} from './theme-context'

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/user">Users</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dasbor">Dasbor</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dasbor">
              <Dasbor />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App

