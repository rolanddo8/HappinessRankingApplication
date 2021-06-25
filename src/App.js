import './App.css';
import React from "react";
import Nagivation from "./Nagivation/Nagivation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div>
            <Nagivation />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
