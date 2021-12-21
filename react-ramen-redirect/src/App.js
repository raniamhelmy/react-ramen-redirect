import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home.js"
import HeroSection from "./components/HeroSection"
import Dessert from "./pages/Dessert"
import Beverages from "./pages/Beverages"
import Ramen from "./pages/Ramen"
import FullMenu from "./pages/FullMenu"
import NotFound from "./pages/NotFound"

import "./App.css";

export default function App() {
  return (
    <>
    
      <Router>
        <HeroSection/>
        <Switch>
          <Route exact path="/"  component= {Home} />
          <Route path="/Ramen"  component= {Ramen} />
          <Route path="/Dessert"  component= {Dessert} />
          <Route path="/Beverages"  component= {Beverages} />
          <Route path="/FullMenu"  component= {FullMenu} />
          <Route  component= {NotFound} />
      
        </Switch>
    
     
      </Router>
     
   
       
    </>
  );
}