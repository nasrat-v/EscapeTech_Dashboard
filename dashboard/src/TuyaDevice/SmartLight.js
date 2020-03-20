import React from "react";
import axios from "axios";
import "./TuyaDevice.css";

class SmartLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightOn: false
    };
    this.handleChangeLight = this.handleChangeLight.bind(this);
    this.flashLight = this.flashLight.bind(this);
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

  handleChangeLight() {
    this.setState({ isLightOn: !this.state.isLightOn });
    if (this.state.isLightOn) {
      this.turnOffLight();
    } else {
      this.turnOnLight();
    }
  }

  initSwitchState() {
    axios
      .get(`http://192.168.2.10:3000/getStatusLight`)
      .then(res => {
        console.log(res.data);
        this.setState({ isLightOn: res.data.lightIsOn });
      })
      .catch(function(err) {
        console.error(err);
        if (this !== undefined)
          this.setState({ isLightOn: this.props.isLightOn });
      });
  }

  turnOnLight() {
    axios
      .get(`http://192.168.2.10:3000/turnOnLight`)
      .then(res => {
        console.log(res.data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  turnOffLight() {
    axios
      .get(`http://192.168.2.10:3000/turnOffLight`)
      .then(res => {
        console.log(res.data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  flashLight() {
    var timer = 10000;

    axios
      .post(`http://192.168.2.10:3000/flashLight`, { utimer: timer })
      .then(res => {
        console.log(res.data);
        this.initSwitchState();
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  setColorLight(colorString) {
    axios
      .post(`http://192.168.2.10:3000/setColorLight`, { color: colorString })
      .then(res => {
        console.log(res.data);
      })
      .catch(function(err) {
        console.error(err);
      });
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
    return (
      <div className="container">
        <h1 className="title-smart-device">Smart Light</h1>
        <div className="jumbotron">
          <div className="switch-container">
            <label>
              <input
                ref="switch"
                checked={this.state.isLightOn}
                onChange={this.handleChangeLight}
                className="switch"
                type="checkbox"
              />
              <div>
                <div></div>
              </div>
            </label>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button
            className="btn btn-lg btn-secondary"
            onClick={this.flashLight}
          >
            Flash light
          </button>
          <br></br>
          <br></br>
          <p className="lead">Change light color</p>
          <button
            className="btn btn-lg btn-danger space"
            onClick={this.setRedLight}
          >
            Red
          </button>
          <button
            className="btn btn-lg btn-yellow space"
            onClick={this.setYellowLight}
          >
            Yellow
          </button>
          <button
            className="btn btn-lg btn-success space"
            onClick={this.setGreenLight}
          >
            Green
          </button>
          <button
            className="btn btn-lg btn-primary space"
            onClick={this.setBlueLight}
          >
            Blue
          </button>
          <button
            className="btn btn-lg btn-cyan space"
            onClick={this.setCyanLight}
          >
            Cyan
          </button>
          <button
            className="btn btn-lg btn-purple space"
            onClick={this.setMagentaLight}
          >
            Magenta
          </button>
        </div>
      </div>
    );
  }
}

export default SmartLight;
