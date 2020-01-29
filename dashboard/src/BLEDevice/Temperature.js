import React from 'react';
import axios from 'axios';
import './Temperature.css'

class Temperature extends React.Component {

  constructor(props) {
      super(props);
      this.state = { temp: [] };
  }

  componentDidMount() {
      this.fetchData();
      this.interval = setInterval(() => {
          this.fetchData();
      }, 10000);
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  fetchData() {
      axios.get(`http://192.168.2.8:3000/getTemperature`)
      .then(res => {
          console.log(res.data);
          this.setState({ temp: res.data });
      })
      .catch(function (err) {
          console.error(err);
      })
  }

  getTemp() {
      return this.state.temp.result;
  }

  render() {
      return (
        <div class="container">
            <h1 class="title-smart-light">Temperature</h1>
            <div class="jumbotron">
                <p class="lead"><strong>{ this.getTemp() }</strong></p>
            </div>
        </div>
     );
  }
}

export default Temperature;