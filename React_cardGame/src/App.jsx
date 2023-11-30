import React from "react"
import "./App.css"
import Home from "./components/Koti";
import CardGame from "./components/cardgame/CardGame";
import BreakOut from "./components/breakout/Breakout";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function App(){


  return(
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/cardgame">Card Game</Link>
              </li>

              <li>
                <Link to="/breakout">Breakout</Link>
              </li>
            
            </ul>

          </nav>

        </div>

        <Routes>
          <Route path="/"         element={<Home />}></Route>
          <Route path="/cardgame" element={<CardGame />}></Route>
          <Route path="/breakout" element={<BreakOut />}></Route>


        </Routes>
          



      </Router>
    </>
    
  );
}







