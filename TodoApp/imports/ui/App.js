import React, { Component } from "react"; //importamos React
import ReactDOM from "react-dom"; //importamos ReactDOM
import { withTracker } from "meteor/react-meteor-data"; //Importamos el  withTracker
import { Tasks } from "../api/tasks"; //importamos la coleccion tasks, que es donde tenemos la informacion
import AccountsUIWrapper from "./AccountsUIWrapper"; //importamos AccountsUIWrapper, que es donde se manejan los datos del usuario en sesion
import { Meteor } from "meteor/meteor"; //importamos Meteor

import Task from "./Task"; // Importamos el componente Task de la misma carpeta

//Exportamos la app principal para que vaya al main.js, exportamos como componente
class App extends Component {
  constructor(props) {
    //constructor
    super(props); //este hereda todas las propiedades
    this.state = {
      //tiene en sesion el estado actual del boton para ocultar tareas completas
      hideCompleted: false //por defecto esta apagado, lo que significa que por defecto la tarea NO esta realizada
    };
  }
  handleSubmit(event) {
    //este metodo se encarga de que cuando se suba un dato, se suba a coleccion de mongo llamada tasks
    event.preventDefault(); // prevenimos que se refresque la pagina
    const text = ReactDOM.findDOMNode(
      this.refs.textInput
    ).value.trim(); /*
    aqui quitamos los espacios en  blanco (.trim) y con la funcion "findDOMNode" buscamos la
    ref llamada textInput con el valor que nosotros suministremos a la pagina */
    /*Tasks.insert({
      /*accedemos al metodo Tasks de ../api/tasks,  que es donde esta mi coleccion de mongo,
       ya aqui usamos el metodo ".insert" para poder insertar a la coleccion llamada tasks
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    }); */
    Meteor.call("tasks.insert", text); //llamamos a la coleccion e insertamos la task

    ReactDOM.findDOMNode(this.refs.textInput).value = ""; //dejamos vacio el formulario
  }
  renderTasks() {
    //aqui es donde se renderizan las tareas ya anotadas o por anotar.
    let filteredTasks = this.props.tasks; //obtenemos un registro de las tareas en la coleccion task
    if (this.state.hideCompleted) {
      // si el estado de la tarea actual es chekeado,
      filteredTasks = filteredTasks.filter(task => !task.checked); //va a filtrar  chekeadas
    }
    //Cogemos la coleccion y la mapeamos
    return filteredTasks.map(task => {
      const currentUserId =
        this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }
  /*El metodo render es el metodo mas importante en cada componente de react,
  este obtiene una descripcion de el html que su componente deberia mostrar,
   esto lo hace gracias a jsx, que luce como html en tu javaScript*/
  // aqui va lo que vamos a exportar a main.js
  render() {
    //aqui es donde renderTasks pasa a hacer parte de app
    return (
      <div className="container">
        <header>
          <h1>To do List ({this.props.incompleteCount})</h1>
          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Ocultar tareas realizadas
          </label>
          <AccountsUIWrapper />
          {this.props.currentUser ? (
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                ref="textInput"
                placeholder="Ingrese para añadir nuevas tareas"
              />
            </form>
          ) : (
            ""
          )}
        </header>
        <ul>{this.renderTasks()}</ul>
      </div>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe("tasks");
  return {
    tasks: Tasks.find({}).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  };
})(App);
