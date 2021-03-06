import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Apps from './components/Apps';
import Youtube from './components/Youtube';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import Particles from './components/Particles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Particles />
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/apps' component={Apps} />
              <Route exact path='/youtube' component={Youtube} />
              <Route exact path='/signup' component={SignUpForm} />
              <Route exact path='/login' component={LogInForm} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
