var fs = require('fs'); // Write to file.
const paladins = require('paladins-api'); // API wrapper.
var config = {
  devId: "2875",
  authKey: "9ECB6530591C42139C1620264B3195DF"
}; // Credentials.
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var funcion;
var getDataUsed = function(boolean) {
  funcion = boolean;
  if (funcion) {
    // Connect to Paladins API by creating a session.
    pal.connect('PC', (err, res) => {
      // Connection worked.
      if (!err) {
        var sessionId = res;
        // Call /getPlayer using the wrapper.
        pal.getDataUsed(sessionId, 'PC', (err, res) => {
          if (!err) {
            console.log(res)
            const content = JSON.stringify(res);
            fs.writeFile("./server/program/metodos/salida/getDataUsed.json", content, 'utf8', function(err) {});
          }
        });

      }
    });
  } else {
    console.log("por favor, ingrese true")
  }
}
module.exports = getDataUsed;
