import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";

import { Tasks } from "../api/tasks";

import Task from "./Task";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false
    };

    this.handleSubmit = this._handleSubmit.bind(this);
    this.toggleHideCompleted = this._toggleHideCompleted.bind(this);
  }
  _handleSubmit(event) {
    event.preventDefault(); //Para no recargar la pagina
    const textInput = ReactDOM.findDOMNode(this.refs.textInput);

    const text = textInput.value.trim();

    Tasks.insert({
      text,
      createdAt: new Date()
    });
    textInput.value = "";
  }

  _toggleHideCompleted() {
    const { hideCompleted } = this.state;
    this.setState({
      hideCompleted: !hideCompleted
    });
  }

  renderTasks() {
    const { tasks } = this.props;
    const { hideCompleted } = this.state;
    let filteredTasks = tasks;

    if (hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map(task => <Task key={task._id} task={task} />);
  }

  render() {
    const { incompleteCount } = this.props;
    const { hideCompleted } = this.state;

    return (
      <div className="container">
        <header>
          <h1>lista de pendientes ({incompleteCount} tareas por completar)</h1>
          <label className="hide-completed">
            <input
              type="checkbox"
              readonly
              checked={hideCompleted}
              onClick={this.toggleHideCompleted}
            />
            Ocultar tareas completadas 😁
          </label>

          <form className="new-task" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="textInput"
              placeholder="Escribe una tarea"
            />
          </form>
        </header>
        <ul>{this.renderTasks()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count()
  };
})(App);
