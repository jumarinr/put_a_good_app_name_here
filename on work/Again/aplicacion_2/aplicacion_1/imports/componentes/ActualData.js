import React, { Component } from "react";
import Formulario from "./Formulario";
class ActualData extends Component {
  constructor() {
    super();
    this.state = {
      notas
    };
  }
  data() {
    if (localStorage != null) {
      return <p>{localStorage.getItem("notas")}</p>;
    }
  }

  render() {
    return (
      <div className="panel-group tamaño">
        <div className="panel panel-primary">
          <div className="panel-heading">Username: {data} Plataforma:</div>
          <div className="panel-body">Fecha de creacion:</div>
        </div>
      </div>
    );
  }
}
export default ActualData;
