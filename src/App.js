import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Detail from './Detail.js';
import NotFound from './NotFound.js';
import './Pokedex.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about-me/">About Me</Link>
      <Switch>
          <Route exact path="/about-me/" component={About} />
          <Route exact path="/pokemon/:pokemon" component={Detail} />
          <Route exact path="/:name" component={Home} />  
          <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
