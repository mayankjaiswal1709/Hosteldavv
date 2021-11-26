
import React from "react";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HelpMeOut from './components/HelpMeOut';
import Rnth from './components/Rnth';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Admin from "./components/Admin/Admin";



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

            <Route path="/about">
              <About />
            </Route>

            <Route path="/HelpMeOut">
              <HelpMeOut />
            </Route>

            <Route path="/Rnth">
              <Rnth />
            </Route>

            <Route path="/adminmj">

              <Admin />

            </Route>
            
          </Switch>


        </div>

      </Router>



    </>
  );
}

export default App;
