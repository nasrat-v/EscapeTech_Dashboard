import React, { Component } from 'react';
import './triggerList.css';


var triggerListJson = '{"TriggerList": [{"index":"0","triggeringfunction": "température","trigger":">","value":"30","triggeredfunction":"Light","arguments":"Blue"},{"index":"1","triggeringfunction": "température","trigger":"<","value":"28","triggeredfunction":"Light","arguments":"Green"},{"index":"2","triggeringfunction": "température","trigger":"==","value":"29","triggeredfunction":"Light","arguments":"Purple"}]}';


export default class triggerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      triggerList : []
    }
    this.deleteTrigger = this.deleteTrigger.bind(this);

  }

  componentDidMount() {
      this.setState({
        triggerList: JSON.parse(triggerListJson)['TriggerList']
    });
  }

  deleteTrigger(e) {
      console.log("Delete trigger with id :", e.target.value);
  }

  render() {

    if(!this.state.triggerList.length)
            return null;
    console.log(this.state.triggerList);
    let triggers = this.state.triggerList.map(item => (
      <div key={item.index} className="row border border-dark margin-10 mazarine-blue rounded p-2">
          <div className="col-md-2">
           <div className="text-whitey form-group text-center">
            <label>Triggering fonction</label>
            <input type="text" className="text-whitey form-control border-0 text-center mazarine-blue" value={ item.triggeringfunction } readOnly></input>
           </div>
          </div>
          <div className="col-md-2">
           <div className="text-whitey form-group text-center">
            <label>Trigger</label>
            <input type="text" className="text-whitey form-control border-0 text-center mazarine-blue" value={ item.trigger } readOnly></input>
           </div>
          </div>
          <div className="col-md-2">
           <div className="text-whitey form-group text-center">
            <label>Value</label>
            <input type="text" className="text-whitey form-control border-0 text-center mazarine-blue" value={ item.value } readOnly></input>
           </div>
          </div>
          <div className="col-md-2">
           <div className="text-whitey form-group text-center">
            <label>Triggered function</label>
            <input type="text" className="text-whitey form-control border-0 text-center mazarine-blue" value={ item.triggeredfunction } readOnly></input>
           </div>
          </div>
          <div className="col-md-2">
           <div className="text-whitey form-group text-center">
            <label>arguments</label>
            <input type="text" className="text-whitey form-control border-0 text-center mazarine-blue" value={ item.arguments } readOnly></input>
           </div>
          </div>
          <div className="col-md-2 m-auto">
            <div className="form-group text-center">
              <button className="btn btn-darkred" value={ item.index } onClick={ this.deleteTrigger }>supprimer</button>
            </div>
          </div>


      </div>
    ));

    return (
      <div className="container jumbotron naval-blue">
        <h1 className="text-center text-whitey">Trigger List</h1>
        {triggers}

      </div>
    )
  }
}
