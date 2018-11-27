import React, { Component } from "react";

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      plataforma: "PC"
    };

    this.alertaPlataforma = this.alertaPlataforma.bind(this);
    this.capturaTexto = this.capturaTexto.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e) {
    e.preventDefault();
    this.props.onAddPlayer(this.state);
    console.log("subiendo");
  }

  capturaTexto(e) {
    const { value, name } = e.target;
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
