import React, { Component } from 'react';
import axios from "axios";
import './MessengerLed.css';

var URL = "http://192.168.2.10:3000";

export default class MessengerLed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messengerLedValue : ""
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.updateLedMessengerText = this.updateLedMessengerText.bind(this);
  }

  componentDidMount() {
    //Lance le code ici une fois que la page à été chargée.
  }

  handleChangeText(obj) {
    this.setState({
      messengerLedValue : obj.target.value
    });
  }

  updateLedMessengerText(e) {
    console.log(this.state.messengerLedValue);
    axios
    .post(URL + "/ledMessenger", {
      message: this.state.messengerLedValue
    })
    .then(response => {
      if (response.data.status) {
        console.log("Text changed");
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
        <div className="container">
            <h1 className="title-smart-device">Messenger Led</h1>
            <div className="jumbotron">
                <div className="switch-container">
                    <label>
                        <input ref="switch" className="switch" type="checkbox" />
                        <div>
                            <div></div>
                        </div>
                    </label>
                </div>
                <br></br><br></br><br></br><br></br>

                <div className="form-group text-center">
                  <div className="form-group text-center">
                    <label htmlFor="ledMessengerInput">Change Messenger Led text :</label>
                    <input id="ledMessengerInput" type="input" className="messageInput form-control text-center" onChange={ this.handleChangeText }></input>
                  </div>
                  <div className="form-group text-center">
                    <label htmlFor="ledMessengerPreview">Messenger Led Preview :</label>
                    <input id="ledMessengerPreview" type="input" className="previewInput form-control text-center" value={this.state.messengerLedValue} readOnly></input>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-lg btn-secondary" onClick={ this.updateLedMessengerText } >Change Text</button>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
