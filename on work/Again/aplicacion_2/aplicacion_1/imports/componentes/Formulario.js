import React, { Component } from "react";
import ReactDOM from "react-dom";

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    };
    this.save = this.save.bind(this);
  }
  save(event) {
    event.preventDefault(); //prevenimos que se cargue la pagina
    window.localStorage.clear(); //Limpiamos el localStorage
    var username = this.refs.username.value; // Nombre de usuario ingresado
    var plataforma = this.refs.plataforma.value; // Plataforma de usuario ingresado
    if (localStorage.getItem("notas") == null) {
      var notas = []; //inicializamos notas
      notas.push(username); // agregamos el usuario
      notas.push(plataforma); // agregamos la plataforma
      localStorage.setItem("notas", JSON.stringify(notas)); // añadimos "notas" a localStorage
    }
    this.setState({
      notas: JSON.parse(localStorage.getItem("notas")) //estado actual de notas
    });
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
              <br />
              <ul>{this.state.notas[0]}</ul>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Formulario;
