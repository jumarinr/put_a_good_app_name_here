import React, { Component } from "react";
import ReactDom from "react-dom";
import Formulario from "./Formulario";
import ActualData from "./ActualData";

class Tablero extends Component {
  constructor() {
    super();
  }
  getInitialData() {
    var notes = window.localStorage.getItem("notes");
    if (notes === null) {
      notes = [];
    } else {
      notes = JSON.parse(notes);
    }
    return {
      notes: notes
    };
  }
  getInit() {
    var notes = this.state.notes.map(function(note, idx) {
      return (
        <ActualData
          id={note.id}
          username={note.username}
          plataforma={note.plataforma}
          key={idx}
        />
      );
    });
  }
  render() {
    return <div className=" panel panel-primary panel-group grid">{notes}</div>;
  }
}
export default Tablero;
