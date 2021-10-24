
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HelpMeOut from './components/HelpMeOut';
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Navbar title="Davv Hostelers" aboutText="About Davv Hostelers" />



        <div className="container my-3">

          <Switch>


            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>



          </Switch>


        </div>



      </Router>



    </>
  );
}

export default App;
