import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "../src/Components/FrontPage/index"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={FrontPage} />
      </div>
    </Router>
  );
}

export default App;
