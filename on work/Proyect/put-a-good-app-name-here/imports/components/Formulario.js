import React, { Component } from "react";
import ReactDOM from "react-dom";
import Task from "../components/Task";
import { Tasks } from "../api/tasks";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.alertaPlataforma = this.alertaPlataforma.bind(this);
    this.capturaTexto = this.capturaTexto.bind(this);
    this.Submit = this._Submit.bind(this);
  }

  _Submit(event) {
    event.preventDefault();
    console.log("subiendo");
    const textInput = ReactDOM.findDOMNode(this.refs.textInput);
    const username = textInput.value.trim();
    Tasks.insert({
      username,
      plataforma: "PC",
      createdAt: new Date()
    });
    textInput.value = "";
  }

  capturaTexto(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  alertaPlataforma() {
    alert(
      "Por el momento no tenemos habilitada la opcion de Xbox, Play Station o Nintendo switch, lamentamos las molestias Pd: no sea juan andres y escoja Pc >:v, no provoque un error"
    );
    console.log("sorry");
  }

  render() {
    return (
      <form className="login" onSubmit={this.Submit}>
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
                onChange={this.capturaTexto}
                ref="textInput"
                required
              />
              <div className="form-group">
                <label for="usr" className="text-black espacio">
                  Seleccione su plataforma:
                </label>
                <select
                  name="priority"
                  className="form-control"
                  onClick={this.alertaPlataforma}
                  required
                  name="plataforma"
                  onChange={this.Submit}
                >
                  <option>PC</option>
                  <option>Xbox</option>
                  <option>Play Station</option>
                  <option>Nintendo switch</option>
                </select>
              </div>
              <button type="submit" className="btn btn-secondary">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Formulario;
