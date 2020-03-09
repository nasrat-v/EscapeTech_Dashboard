import React, { Component } from 'react';
import './App.css';
import CoinSensor from './BLEDevice/CoinSensor';
import SmartSocket from './TuyaDevice/SmartSocket';
import SmartLight from './TuyaDevice/SmartLight';
import MessengerLed from './MessengerLed/MessengerLed';
import TriggerGenerator from './TriggerGenerator/TriggerGenerator';

class App extends Component {
  render() {
    return (
      <div>
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
                  <h1 className="dashboard">Welcome on Dashboard !</h1>
              </div>
              <div className="results--section__inner">
                  <br></br><br></br>
                  <CoinSensor />
                  <br></br><br></br>
                  <SmartSocket />
                  <br></br><br></br>
                  <SmartLight />
                  <br></br><br></br>
                  <MessengerLed/>
                  <br></br><br></br>
                  <TriggerGenerator/>
              </div>
          </section>
      </div>
    );
  }
}

export default App;