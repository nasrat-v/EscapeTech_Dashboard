import React, { Component } from "react";
import axios from "axios";

let URL = "http://192.168.2.10:3000";

export default class TriggerGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      trigger: ">",
      triggeringFonction: "temperature",
      TriggeredFonction: "lightStatus",
      TriggeredValueClassName: "",
      argument: "true",
      lightArgClass: "",
      socketArgClass: "d-none",
      ledmessengerArgClass: "d-none",
      captorClass: "form-group text-center",
      lightsClass: "form-group text-center d-none"
    };
    this.FillTriggerList = this.FillTriggerList.bind(this);
    this.updateTriggerValue = this.updateTriggerValue.bind(this);
    this.addTrigger = this.addTrigger.bind(this);

    this.updateChangeValue = this.updateChangeValue.bind(this);

    this.updateTrigger = this.updateTrigger.bind(this);
    this.updateTriggeredFunction = this.updateTriggeredFunction.bind(this);

    /* ELEMENTS REF */
    this.tempRef = React.createRef();
  }

  updateChangeValue(e) {
    console.log(e.target.value);
    this.setState({ argument: e.target.value });
  }

  updateTrigger(e) {
    console.log(e.target.value);
    this.setState({ trigger: e.target.value });
  }

  updateTriggeredFunction(e) {
    this.setState({ TriggeredFonction: e.target.value });
    if (e.target.value === "lightStatus") {
      this.setState({
        lightArgClass: "form-group text-center",
        socketArgClass: "form-group text-center d-none",
        ledmessengerArgClass: "form-group text-center d-none"
      });
    } else if (e.target.value === "socketStatus") {
      this.setState({
        lightArgClass: "form-group text-center d-none",
        socketArgClass: "form-group text-center",
        ledmessengerArgClass: "form-group text-center d-none"
      });
    } else {
      //e.target.value == ledmessenger
      this.setState({
        lightArgClass: "form-group text-center d-none",
        socketArgClass: "form-group text-center d-none",
        ledmessengerArgClass: "form-group text-center"
      });
    }
  }

  addTrigger(e) {
    console.log("value =", this.state.value);
    console.log("trigger = ", this.state.trigger);
    console.log("triggeringFunction = ", this.state.triggeringFonction);
    console.log("triggeredFunction = ", this.state.TriggeredFonction);
    console.log("argument =", this.state.argument);
    axios
      .post(URL + "/addTrigger", {
        // data to be sent
        comparator: this.state.trigger,
        triggeringFunction: this.state.triggeringFonction,
        triggeredFunction: this.state.TriggeredFonction,
        value: this.state.value,
        argument: this.state.argument
      })
      .then(response => {
        if (response.data.status) {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    //Lance le code ici une fois que la page a été chargée.
  }

  updateTriggerValue(e) {
    this.setState({ value: e.target.value });
  }

  getTriggerList() {
    var triggeringFonctions = [];

    triggeringFonctions.push("temperature");
    triggeringFonctions.push("humidity");
    triggeringFonctions.push("pressure");
    triggeringFonctions.push("magnetometer");
    triggeringFonctions.push("gyroscope");
    triggeringFonctions.push("accelerometer");
    triggeringFonctions.push("lightStatus");
    triggeringFonctions.push("socketStatus");

    return triggeringFonctions;
  }

  FillTriggerList(e) {
    var options = e.target.options;
    var index = options.selectedIndex;
    var value = options[options.selectedIndex].value;
    console.log(value);

    var triggeringFonctionsList = this.getTriggerList();

    this.setState({ triggeringFonction: triggeringFonctionsList[index] });
    console.log("Triggering fonction", this.state.triggeringFonction);

    if (value <= 5) {
      this.setState({
        captorClass: "form-group text-center",
        lightsClass: "form-group text-center d-none"
      });
    } else {
      //Lumière ou interrupteur
      this.setState({
        captorClass: "form-group text-center d-none",
        lightsClass: "form-group text-center"
      });
    }
  }

  render() {
    var sup = ">";
    var eq = "==";
    var inf = "<";

    return (
      <div className="container jumbotron">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group text-center">
              <label htmlFor="TriggerFonctions">Triggering fonction:</label>
              <select
                className="form-control"
                id="TriggerFonctions"
                onChange={this.FillTriggerList}
              >
                <option value="0">Température</option>
                <option value="1">Humidité</option>
                <option value="2">Préssion</option>
                <option value="3">Magnétomètre</option>
                <option value="4">Gyroscope</option>
                <option value="5">Accéleromètre</option>
                <option value="6">Lumière</option>
                <option value="7">Interrupteur</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className={this.state.captorClass}>
              <label htmlFor="Trigger">Trigger :</label>
              <select
                className="form-control"
                id="Trigger"
                onChange={this.updateTrigger}
              >
                <option value=">">{sup} </option>
                <option value="<">{inf}</option>
                <option value="==">{eq}</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className={this.state.captorClass}>
              <label id="TriggerValueLabel" htmlFor="TriggerValue">
                Value captor:
              </label>
              <input
                type="text"
                className="form-control"
                onChange={this.updateTriggerValue}
              ></input>
            </div>

            <div className={this.state.lightsClass}>
              <label id="TriggerValueLabel" htmlFor="TriggerValue">
                Value light :
              </label>
              <select
                className="form-control"
                onChange={this.updateTriggerValue}
              >
                <option value="true">Allumer</option>
                <option value="false">Eteindre</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group text-center">
              <label htmlFor="TriggeredFonctions">Triggered fonction:</label>
              <select
                className="form-control"
                id="TriggeredFonctions"
                onChange={this.updateTriggeredFunction}
              >
                <option value="lightStatus">Lumière</option>
                <option value="socketStatus">Interrupteur</option>
                <option value="ledmessenger">Led Messenger</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className={this.state.lightArgClass}>
              <label>Value :</label>
              <select
                id="LightArgument"
                className="form-control"
                onChange={this.updateChangeValue}
              >
                <option value="true">Allumer</option>
                <option value="false">Eteindre</option>
                <option value="red">Rouge</option>
                <option value="yellow">Jaune</option>
                <option value="green">Verte</option>
                <option value="blue">Bleue</option>
                <option value="cyan">Cyan</option>
                <option value="magenta">Magenta</option>
              </select>
            </div>

            <div className={this.state.socketArgClass}>
              <label>Value :</label>
              <select
                id="SocketArgument"
                className="form-control"
                onChange={this.updateChangeValue}
              >
                <option value="true">Allumer</option>
                <option value="false">Eteindre</option>
                <option value="red">Rouge</option>
                <option value="yellow">Jaune</option>
                <option value="green">Verte</option>
                <option value="blue">Bleue</option>
                <option value="cyan">Cyan</option>
                <option value="magenta">Magenta</option>
                <option value="flash">Flash</option>
              </select>
            </div>

            <div className={this.state.ledmessengerArgClass}>
              <label>Value :</label>
              <input
                id="LedMessengerArgument"
                type="text"
                className="form-control"
                onChange={this.updateChangeValue}
              ></input>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn btn-primary" onClick={this.addTrigger}>
              Register Trigger
            </button>
          </div>
        </div>
      </div>
    );
  }
}
