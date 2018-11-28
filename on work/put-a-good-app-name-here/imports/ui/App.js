import React, { Component } from "react";
import ReactDOM from "react-dom";
import Formulario from "../components/Formulario";
import { playerInfo } from "../api/playerInfo";
import { DatosUsuario } from "../components/DatosUsuario";

import { player } from "./player.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player
    };
    this.añadirUsuario = this.añadirUsuario.bind(this);
    this.pruena = this.prueba.bind(this);
  }
  añadirUsuario(todo) {
    this.setState({
      player: [...this.state.player, todo]
    });
  }
  prueba() {
    console.log(player.username);
  }
  render() {
    return (
      <div>
        <div className="container">
          <Formulario />
        </div>
        <div className="Cuerpo">
          <div className="row">{new Date()}</div>
        </div>
      </div>
    );
  }
}
export default App;
