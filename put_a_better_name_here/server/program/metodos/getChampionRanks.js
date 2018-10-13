var fs = require('fs'); // archivo de salida
const paladins = require('paladins-api'); // llamamos las funciones del api
var config = {
  devId: "2875",
  authKey: "9ECB6530591C42139C1620264B3195DF"
}; //credenciales
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var player;
var variable;
var getChampionRanks = function(dato, dato1) {
  player = dato;
  variable = dato1;
  if (variable) {
    pal.connect('PC', (err, res) => {
      // La coneccion funciono
      if (!err) {
        var sessionId = res;
        // llama al metodo getChampionRanks del api de paladins-
        pal.getChampionRanks(sessionId, 'PC', player, (err, res) => {
          if (!err) {
            const content = JSON.stringify(res);
            fs.writeFile("./server/program/metodos/salida/getChampionRanks.json", content, 'utf8', function(err) { // lo que nos saca el metodo
            });
          }
        });
      }
    });
  }
  else{
    return console.log("inserte true");
  }
}
module.exports = getChampionRanks; //exportamos :v
