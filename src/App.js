import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

import { Location } from './components/Location';

class App extends Component {
  render() {
    return (
      <div className="FeedMe">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to FeedMe. We decide for you.
          </p>


          <div>
            <Location/>
          </div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to decide!
          </a>
        </header>
      </div>
    );
  }
}

export default App;