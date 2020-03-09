import React from 'react';
import axios from 'axios';
import './TuyaDevice.css';

class SmartSocket extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isSocketOn: false
      };
      this.handleChangeSocket = this.handleChangeSocket.bind(this);
      this.flashSocket = this.flashSocket.bind(this);
      this.setRedLight = this.setRedLight.bind(this);
      this.setYellowLight = this.setYellowLight.bind(this);
      this.setGreenLight = this.setGreenLight.bind(this);
      this.setBlueLight = this.setBlueLight.bind(this);
      this.setCyanLight = this.setCyanLight.bind(this);
      this.setMagentaLight = this.setMagentaLight.bind(this);
  }

  componentDidMount() {
      this.initSwitchState();
  }

  handleChangeSocket() {
      this.setState({ isSocketOn: !this.state.isSocketOn });
      if (this.state.isSocketOn) {
          this.turnOffSocket();
      } else {
          this.turnOnSocket();
      }
  }

  initSwitchState() {
      axios.get(`http://192.168.2.7:3000/getStatusSocket`)
      .then(res => {
          console.log(res.data);
          this.setState({ isSocketOn: res.data.socketIsOn });
      })
      .catch(function (err) {
          console.error(err);
          this.setState({ isSocketOn: this.props.isSocketOn });
      })
  }

  turnOnSocket() {
      axios.get(`http://192.168.2.7:3000/turnOnSocket`)
      .then(res => {
          console.log(res.data);
      })
      .catch(function (err) {
          console.error(err);
      })
  }

  turnOffSocket() {
      axios.get(`http://192.168.2.7:3000/turnOffSocket`)
      .then(res => {
          console.log(res.data);
      })
      .catch(function (err) {
          console.error(err);
      })
  }

  flashSocket() {
      var timer = 10000;
      
      axios.post(`http://192.168.2.7:3000/flashSocket`, { utimer: timer })
      .then(res => {
          console.log(res.data);
      })
      .catch(function (err) {
          console.error(err);
      })
  }

  setColorLight(colorString) {
      axios.post(`http://192.168.2.7:3000/setColorSocket`, { color: colorString })
      .then(res => {
          console.log(res.data);
      })
      .catch(function (err) {
          console.error(err);
      })
  }

  setRedLight() {
      this.setColorLight("red");
  }

  setYellowLight() {
      this.setColorLight("yellow");
  }

  setGreenLight() {
      this.setColorLight("green");
  }

  setBlueLight() {
      this.setColorLight("blue");
  }

  setCyanLight() {
      this.setColorLight("cyan");
  }

  setMagentaLight() {
      this.setColorLight("magenta");
  }

  render() {
    return(
        <div className="container">
            <h1 className="title-smart-device">Smart Socket</h1>
            <div className="jumbotron">
                <div className="switch-container">
                    <label>
                        <input ref="switch" checked={ this.state.isSocketOn } onChange={ this.handleChangeSocket } className="switch" type="checkbox" />
                        <div>
                            <div></div>
                        </div>
                    </label>
                </div>
                <br></br><br></br><br></br><br></br>
                <button className="btn btn-lg btn-secondary" onClick={ this.flashSocket }>Flash socket light</button>
                <br></br><br></br>
                <p className="lead">Change socket color</p>
                <button className="btn btn-lg btn-danger space" onClick={ this.setRedLight }>Red</button>
                <button className="btn btn-lg btn-yellow space" onClick={ this.setYellowLight }>Yellow</button>
                <button className="btn btn-lg btn-success space" onClick={ this.setGreenLight }>Green</button>
                <button className="btn btn-lg btn-primary space" onClick={ this.setBlueLight }>Blue</button>
                <button className="btn btn-lg btn-cyan space" onClick={ this.setCyanLight }>Cyan</button>
                <button className="btn btn-lg btn-purple space" onClick={ this.setMagentaLight }>Magenta</button>
            </div>
        </div>
    );
  }
}

export default SmartSocket;