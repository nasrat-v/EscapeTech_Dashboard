import React from "react";
import axios from "axios";
import "./CoinSensor.css";

const TIME_REFRESH_DATA = 10;

class CoinSensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
      humi: [],
      pres: [],
      magn: [],
      gyro: [],
      acce: [],
      seconds: TIME_REFRESH_DATA
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.timerInterval = setInterval(() => {
      const seconds = this.state.seconds;
      if (seconds <= 0) {
        this.fetchData();
        this.setState({ seconds: TIME_REFRESH_DATA });
      } else {
        this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  fetchData() {
    this.fetchTemperature();
    this.fetchHumidity();
    this.fetchPressure();
    this.fetchMagnetometer();
    this.fetchGyroscope();
    this.fetchAccelerometer();
  }

  fetchTemperature() {
    axios
      .get(`http://192.168.2.10:3000/getTemperature`)
      .then(res => {
        console.log(res.data);
        this.setState({ temp: res.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  fetchHumidity() {
    axios
      .get(`http://192.168.2.10:3000/getHumidity`)
      .then(res => {
        console.log(res.data);
        this.setState({ humi: res.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  fetchPressure() {
    axios
      .get(`http://192.168.2.10:3000/getPressure`)
      .then(res => {
        console.log(res.data);
        this.setState({ pres: res.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  fetchMagnetometer() {
    axios
      .get(`http://192.168.2.10:3000/getMagnetometer`)
      .then(res => {
        console.log(res.data);
        this.setState({ magn: res.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  fetchGyroscope() {
    axios
      .get(`http://192.168.2.10:3000/getGyroscope`)
      .then(res => {
        console.log(res.data);
        this.setState({ gyro: res.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  fetchAccelerometer() {
    axios
      .get(`http://192.168.2.10:3000/getAccelerometer`)
      .then(res => {
        console.log(res.data);
        this.setState({ acce: res.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  getTemp() {
    return this.state.temp.result;
  }

  getHumi() {
    return this.state.humi.result;
  }

  getPres() {
    return this.state.pres.result;
  }

  getMagnX() {
    return this.state.magn.X;
  }

  getMagnY() {
    return this.state.magn.Y;
  }

  getMagnZ() {
    return this.state.magn.Z;
  }

  getGyroX() {
    return this.state.gyro.X;
  }

  getGyroY() {
    return this.state.gyro.Y;
  }

  getGyroZ() {
    return this.state.gyro.Z;
  }

  getAcceX() {
    return this.state.acce.X;
  }

  getAcceY() {
    return this.state.acce.Y;
  }

  getAcceZ() {
    return this.state.acce.Z;
  }

  getSeconds() {
    return this.state.seconds;
  }

  render() {
    return (
      <div className="container">
        <h1 className="title-smart-light">Coin Sensor</h1>
        <div className="jumbotron">
          <button className="btn btn-lg btn-secondary" onClick={this.fetchData}>
            Refresh
          </button>
          <p className="lead">Auto-refresh in: {this.getSeconds()} sec</p>
          <br></br>
          <br></br>
          <p className="lead">
            Temperature: <strong>{this.getTemp()}</strong>
          </p>
          <p className="lead">
            Humidity: <strong>{this.getHumi()}</strong>
          </p>
          <p className="lead">
            Pressure: <strong>{this.getPres()}</strong>
          </p>
          <p className="lead">
            Magnetometer:{" "}
            <strong>
              X= {this.getMagnX()} / Y= {this.getMagnY()} / Z= {this.getMagnZ()}
            </strong>
          </p>
          <p className="lead">
            Gyroscope:{" "}
            <strong>
              X= {this.getGyroX()} / Y= {this.getGyroY()} / Z= {this.getGyroZ()}
            </strong>
          </p>
          <p className="lead">
            Accelerometer:{" "}
            <strong>
              X= {this.getAcceX()} / Y= {this.getAcceY()} / Z= {this.getAcceZ()}
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default CoinSensor;
