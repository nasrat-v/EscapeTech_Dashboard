import React, { Component } from 'react';
import './App.css';
import Temperature from './BLEDevice/Temperature'
import SmartSocket from './TuyaDevice/SmartSocket';
import SmartLight from './TuyaDevice/SmartLight';

class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">EscapeTech</span>
                      </div>
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1 class="dashboard">Welcome on Dashboard !</h1>
              </div>
              <div className="results--section__inner">
                  <br></br><br></br>
                  <Temperature />
                  <br></br><br></br>
                  <SmartSocket />
                  <br></br><br></br>
                  <SmartLight />
              </div>
          </section>
      </div>
    );
  }
}

export default App;