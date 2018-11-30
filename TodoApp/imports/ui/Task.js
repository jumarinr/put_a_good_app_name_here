import React, { Component } from "react"; //importamos React y Component
import { Meteor } from "meteor/meteor"; // importamos meteor
import { Tasks } from "../api/tasks.js"; //importamos Tasks
import classnames from "classnames"; //Importamos classnames

// Componente Task, representa cada item tas todo
export default class Task extends Component {
  toggleChecked() {
    // Aplica el valor opuesto si se llega a presionar
    /*  Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked }
    });*/
    Meteor.call(
      "tasks.setChecked",
      this.props.task._id,
      !this.props.task.checked
    );
  }

  deleteThisTask() {
    //removemos una task de nuestra coleccion
    //Tasks.remove(this.props.task._id); Funcion vieja, usada para  borrar de la colleccion la tarea
    Meteor.call("tasks.remove", this.props.task._id);
  }
  togglePrivate() {
    //llamamos al metodo para poder poner en privadas las tareas
    Meteor.call(
      "tasks.setPrivate",
      this.props.task._id,
      !this.props.task.private
    );
  }

  render() {
    // le da a las task un diferente  className si llega a ser seleccionada
    // con esto se puede estilizar.
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private
    });

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          {/*Añadimos accion al evento on click, que me va a ejecutar
          deleteThisTask y ma la va a borrar */}
          &times;
        </button>
        {/* aqui miramos el estado de la seleccion,
          sea que este seleccionada o no
          */}
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        {this.props.showPrivateButton ? (
          <button
            className="toggle-private"
            onClick={this.togglePrivate.bind(this)}
          >
            {this.props.task.private ? "Private" : "Public"}
          </button>
        ) : (
          ""
        )}
        <span className="text">
          <strong>{this.props.task.username}: </strong>
          {this.props.task.text}{" "}
          {/*
          aqui se muestra en pantalla el texto de la tarea*/}
        </span>
      </li>
    );
  }
}
