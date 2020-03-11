import React, { Component } from 'react';

export default class TriggerGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0,
      trigger : "",
      triggeringFonction : "",
      TriggeredFonction : ""
    }
    this.FillTriggerList = this.FillTriggerList.bind(this);
    this.updateTriggerValue = this.updateTriggerValue.bind(this);
    this.addTrigger = this.addTrigger.bind(this);
    this.fillTemperatureTrigger = this.fillTemperatureTrigger.bind(this);
    this.fillLightTrigger = this.fillLightTrigger.bind(this);
    this.updateTrigger = this.updateTrigger.bind(this);
    this.updateTriggeredFunction = this.updateTriggeredFunction.bind(this);
  }

  updateTrigger(e) {
    console.log(e.target.value);
    this.state.trigger = e.target.value;
  }

  updateTriggeredFunction(e) {
    this.state.TriggeredFonction = e.target.value;
  }

  addTrigger(e) {
    console.log("value =", this.state.value);
    console.log("trigger = ", this.state.trigger);
    console.log("triggeringFunction = ", this.state.triggeringFonction);
    console.log("triggeredFonction = ", this.state.TriggeredFonction);
  }

  componentDidMount() {
    //Lance le code ici une fois que la page a été chargée.
  }

  updateTriggerValue(e) {
    this.setState({value : e.target.value});
  }

  getTriggerList() {
    var triggeringFonctions = new Array();

    triggeringFonctions.push(this.fillTemperatureTrigger);
    triggeringFonctions.push(this.fillLightTrigger);

    return (triggeringFonctions);
  }


  FillTriggerList(e) {
    var options = e.target.options;
    var index = options.selectedIndex;
    var value = options[options.selectedIndex].value;
    console.log(value);

    

    var triggeringFonctionsList = this.getTriggerList();
    triggeringFonctionsList[index]();
  }


  fillTemperatureTrigger() {
    this.setState({triggeringFonction : "temperature"});
    console.log("Température");
  }

  fillLightTrigger() {
    this.setState({triggeringFonction : "light"});
    console.log("Light");
  }

  render() {
    return (
      <div className="container jumbotron">
        <div className="row">
          <div className="col-md-4">
           <div className="form-group text-center">
            <label htmlFor="TriggerFonctions">Triggering fonction:</label>
            <select className="form-control" id="TriggerFonctions" onChange={ this.FillTriggerList }>
             <option value="0">Température</option>
             <option value="1">2</option>
            </select>
           </div>
          </div>
          <div className="col-md-2">
            <div className="form-group text-center">
              <label htmlFor="Trigger">Trigger :</label>
              <select className="form-control" id="Trigger" onChange={ this.updateTrigger }>
                <option value=">"> Suppérieur </option>
                <option value="<"> Inférieure</option>
                <option value="=="> Equal</option>
              </select>
              </div>
          </div>
          <div className="col-md-2">
            <div className="form-group text-center">
              <label id="TriggerValueLabel" htmlFor="TriggerValue">Value :</label>
              <input type="text" className="form-control" onChange={ this.updateTriggerValue } ></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group text-center">
              <label htmlFor="TriggeredFonctions">Triggered fonction:</label>
              <select className="form-control" id="TriggeredFonctions" onChange={ this.updateTriggeredFunction } >
                <option>Light</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn btn-primary" onClick={ this.addTrigger }>Register Trigger</button>
          </div>          
        
        </div>
      </div>
    )
  }
}
