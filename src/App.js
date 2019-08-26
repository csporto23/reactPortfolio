import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "../src/Components/FrontPage/index"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div>
    <Navbar />
    <Router>
      <div>
        <Route exact path="/" component={FrontPage} />
      </div>
    </Router>
    </div>

  );
}

export default App;
