import React, { Component } from "react";
import ReactDOM from "react-dom";

class Formulario extends Component {
  constructor() {
    super();
    this.save = this.save.bind(this);
  }
  save(event) {
    event.preventDefault();
    window.localStorage.clear();
    var note = {
      id: new Date().getTime(),
      username: ReactDOM.findDOMNode(this.refs.username).value,
      plataforma: ReactDOM.findDOMNode(this.refs.plataforma).value
    };
    var notes = window.localStorage.getItem("notes");
    if (notes === null) {
      notes = []; // Creamos una nueva lista vacía
    } else {
      notes = JSON.parse(notes); // Decodificamos la cadena
    }

    // Insertamos la nueva nota al principio de la lista
    notes.unshift(note);

    // Codificamos la lista como cadena de texto
    notes = JSON.stringify(notes);

    // Guardamos en localStorage
    window.localStorage.setItem("notes", notes);
    console.log(notes);

    // Vaciamos el formulario
    ReactDOM.findDOMNode(this.refs.username).value = "";
    ReactDOM.findDOMNode(this.refs.plataforma).value = "";
  }
  render() {
    return (
      <form className="login" onSubmit={this.save}>
        <div className="form-group row">
          <div className="input-group">
            <div>
              <h1 className="login-title text-center">
                <code className="Color">
                  Bienvenido a su nueva Paladins guru.
                </code>
              </h1>
              <label for="usr" className="text-black login-title">
                Ingrese su gamertag:
              </label>
              <input
                type="text"
                className="form-control"
                id="usr"
                name="username"
                ref="username"
                required
              />
              <div className="form-group">
                <label for="usr" className="text-black espacio">
                  Seleccione su plataforma:
                </label>
                <select
                  name="plataforma"
                  className="form-control"
                  required
                  name="plataforma"
                  ref="plataforma"
                >
                  <option>PC</option>
                  <option>Xbox</option>
                  <option>Play Station</option>
                  <option>Nintendo switch</option>
                </select>
              </div>
              <button type="submit" className="btn btn-secondary espacio">
                Ingresar datos
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Formulario;
