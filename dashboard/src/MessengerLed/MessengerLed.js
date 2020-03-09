import React, { Component } from 'react';
import './MessengerLed.css';

export default class MessengerLed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messengerLedValue : ""
    }
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  componentDidMount() {
    //Lance le code ici une fois que la page à été chargée.
  }

  handleChangeText(obj) {
    this.setState({
      messengerLedValue : obj.target.value
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
                  <div className="input-group">
                    <input type="input" className="messageInput form-control text-center" onChange={ this.handleChangeText }></input>
                  </div>
                  <div className="input-group">
                    <input type="input" className="previewInput form-control text-center" value={this.state.messengerLedValue} readOnly></input>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-lg btn-secondary" >Change Text</button>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
