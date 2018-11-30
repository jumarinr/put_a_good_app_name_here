import React from "react"; //importamos react
import { Meteor } from "meteor/meteor"; //importamos meteor
import { render } from "react-dom"; // importamos render de react-dom
import App from "../imports/ui/App.js"; //importamos donde esta la app principal para el contenido html
import "../imports/startup/accounts-config"; //importamos la configuracion de las cuentas

//Este metodo significa que lo que esta adentro se inicia de primero al iniciar meteor. en este caso seria la funcion renderizar que dentro tiene nuestra app
Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
  //renderizamos la app por medio de las etiquetas de react <Content/>, buscamos una id llamada render-target y la reemplazamos por nuestra app
});
