import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TriggerGenerator extends Component {
  constructor(props) {
    super(props);
    this.FillTriggerList = this.FillTriggerList.bind(this);
  }

  componentDidMount() {
    //Lance le code ici une fois que la page a été chargée.
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
    console.log("Température");
  }

  fillLightTrigger() {
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
            <div className="form-group">
              <label htmlFor="Trigger">Trigger :</label>
              <select className="form-control" id="Trigger">
                <option> Suppérieur </option>
                <option> Inférieure</option>
                <option> Equal</option>
              </select>
              </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label id="TriggerValueLabel" htmlFor="TriggerValue">Value :</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group text-center">
              <label htmlFor="TriggeredFonctions">Triggered fonction:</label>
              <select className="form-control" id="TriggeredFonctions">
                <option>Light</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn btn-primary">Register Trigger</button>
          </div>          
        
        </div>
      </div>
    )
  }
}
