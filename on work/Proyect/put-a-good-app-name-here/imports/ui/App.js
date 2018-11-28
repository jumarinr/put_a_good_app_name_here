import React, { Component } from "react";
import ReactDOM from "react-dom";
import Formulario from "../components/Formulario";
import { withTracker } from "meteor/react-meteor-data";

import { DatosUsuario } from "../components/DatosUsuario";
import Task from "../components/Task";
import { Tasks } from "../api/tasks";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderPLayers() {
    const { tasks } = this.props;
    return tasks.map(task => <Task key={task._id} task={task} />);
  }
  render() {
    return (
      <div>
        <div className="container">
          <Formulario />
        </div>
        <div className="Cuerpo">
          <ul>{this.renderPLayers()}</ul>
        </div>
      </div>
    );
  }
}
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch()
  };
})(App);
