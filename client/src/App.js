import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FibCalc from './FibCalc';
import Docs from './Dokumentacja';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Realizacja zadania nr1 w ramach laboratorium PFSwChO</h1>
          <h2>Karol Bielec, IMST 1.1/1</h2>
          <Link to="/">Strona glowna</Link>
          <Link to="/fibcalc">FibCalc</Link>
          <Link to="/docs">Dokumentacja</Link>
        <div>
          <Route path="/fibcalc" component={FibCalc} />
          <Route path="/docs" component={Docs} />
        </div>
        </header>

      </div>
    </Router>
  );
}

export default App;

