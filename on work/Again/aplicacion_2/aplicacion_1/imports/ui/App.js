import React, { Component } from "react";
import Formulario from "../componentes/Formulario";
import Tablero from "../componentes/Tablero";
import ActualData from "../componentes/ActualData";
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Formulario />
        </div>
        <div className="container">
          <Tablero />
        </div>
      </div>
    );
  }
}
export default App;
