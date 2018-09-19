import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Apps from './components/Apps';
import Youtube from './components/Youtube';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/apps' component={Apps} />
            <Route exact path='/youtube' component={Youtube} />
            <Route exact path='/resume' component={Resume} />
          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
