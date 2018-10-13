var fs = require('fs'); // Write to file.
const paladins = require('paladins-api'); // API wrapper.
var config = {
  devId: "2875",
  authKey: "9ECB6530591C42139C1620264B3195DF"
};
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var player;
var variable;
var getMatchHistory = function(dato, ejecucion) {
  player = dato
  variable = ejecucion
  if (variable) {
  pal.connect('PC', (err, res) => {
    // Connection worked.
    if (!err) {
      var sessionId = res;
      // Call /GetMatchHistory using the wrapper.
      pal.getMatchHistory(sessionId, 'PC', player, (err, res) => {
        if (!err) {
          const content = JSON.stringify(res);
          fs.writeFile("./server/program/metodos/salida/getMatchHistory.json", content, 'utf8', function(err) {});
          console.log("funciona")
        }
      });
    }
  });
}
else{
  console.log("ingrese true")
}}
module.exports = getMatchHistory;
