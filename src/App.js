
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Navbar title="Davv Hostelers" aboutText="About Davv Hostelers" />

        <div className="container my-3">

          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/Home">
              <Home />
            </Route>

          </Switch>



        </div>



      </Router>



    </>
  );
}

export default App;
