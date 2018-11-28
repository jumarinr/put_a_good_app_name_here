import React, { Component } from "react";

class ActualData extends Component {
  render() {
    return (
      <div className="panel-group tamaño">
        <div className="panel panel-primary">
          <div className="panel-heading">
            Username: {this.props.username} Plataforma: {this.props.plataforma}
          </div>
          <div className="panel-body">Fecha de creacion:</div>
        </div>
      </div>
    );
  }
}
export default ActualData;
