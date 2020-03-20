import React, { Component } from "react";
import axios from "axios";
import "./triggerList.css";

var triggerListJson =
  '{"TriggerList": [{"index":"0","triggeringfunction": "température","trigger":">","value":"30","triggeredfunction":"Light","arguments":"Blue"},{"index":"1","triggeringfunction": "température","trigger":"<","value":"28","triggeredfunction":"Light","arguments":"Green"},{"index":"2","triggeringfunction": "température","trigger":"==","value":"29","triggeredfunction":"Light","arguments":"Purple"}]}';

  var URL = "http://192.168.2.10:3000";

export default class triggerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerList: []
    };
    this.deleteTrigger = this.deleteTrigger.bind(this);
    this.getTriggers = this.getTriggers.bind(this);
  }

  componentDidMount() {
    this.getTriggers();
  }

  getTriggers() {
    axios
      .get(URL + "/getTriggers")
      .then(res => {
        console.log(res.data);
        this.setState({
          triggerList: res.data.response
        });
        console.log(this.state.triggerList);
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  deleteTrigger(e) {
    console.log("Delete trigger with id :", e.target.value);
    axios
      .post(URL + "/deleteTrigger", {
        id: e.target.value
      })
      .then(response => {
        if (response.data.status) {
          console.log(response);
        }
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.triggerList.length) return null;
    console.log(this.state.triggerList);
    let triggers = this.state.triggerList.map(item => (
      <div
        key={item.index}
        className="row border border-dark margin-10 mazarine-blue rounded p-2"
      >
        <div className="col-md-2">
          <div className="text-whitey form-group text-center">
            <label>Triggering fonction</label>
            <input
              type="text"
              className="text-whitey form-control border-0 text-center mazarine-blue"
              value={item.triggeringFunction}
              readOnly
            ></input>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-whitey form-group text-center">
            <label>Trigger</label>
            <input
              type="text"
              className="text-whitey form-control border-0 text-center mazarine-blue"
              value={item.comparator}
              readOnly
            ></input>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-whitey form-group text-center">
            <label>Value</label>
            <input
              type="text"
              className="text-whitey form-control border-0 text-center mazarine-blue"
              value={item.value}
              readOnly
            ></input>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-whitey form-group text-center">
            <label>Triggered function</label>
            <input
              type="text"
              className="text-whitey form-control border-0 text-center mazarine-blue"
              value={item.triggeredFunction}
              readOnly
            ></input>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-whitey form-group text-center">
            <label>arguments</label>
            <input
              type="text"
              className="text-whitey form-control border-0 text-center mazarine-blue"
              value={item.argument}
              readOnly
            ></input>
          </div>
        </div>
        <div className="col-md-2 m-auto">
          <div className="form-group text-center">
            <button
              className="btn btn-darkred"
              value={item.id}
              onClick={this.deleteTrigger}
            >
              supprimer
            </button>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="container jumbotron naval-blue">
        <h1 className="text-center text-whitey">Trigger List</h1>
        {triggers}
      </div>
    );
  }
}
