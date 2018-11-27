import React, { Component } from "react";
import ReactDOM from "react-dom";
import Formulario from "../components/Formulario";
import { withTracker } from "meteor/react-meteor-data";
import { playerInfo } from "../api/playerInfo";
import { DatosUsuario } from "../components/DatosUsuario";

import { PlayerInfo } from "../api/playerInfo";

import { player } from "./player.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player
    };
    this.añadirUsuario = this.añadirUsuario.bind(this);
    this.pruena = this.prueba.bind(this);
    this.renderPLayers = this.renderPLayers(this);
  }
  renderPLayers() {
    const { playerinfo } = this.props;
    return playerinfo.map(playerInfo => (
      <PlayerInfo key={playerinfo._id} playerinfo={playerInfo} />
    ));
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
          <Formulario
            onAddPlayer={this.añadirUsuario}
            onLoadStart={this.prueba}
          />
        </div>
        <div className="Cuerpo">
          <div className="row">{this.renderPLayers()}</div>
        </div>
      </div>
    );
  }
}
export default withTracker(() => {
  return {
    playerinfo: PlayerInfo.find({}).fetch()
  };
})(App);
