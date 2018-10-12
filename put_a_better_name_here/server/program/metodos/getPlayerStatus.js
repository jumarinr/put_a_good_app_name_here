var fs = require('fs'); // Write to file.
const paladins = require('paladins-api'); // API wrapper.
var config = {
devId: "2875",
authKey: "9ECB6530591C42139C1620264B3195DF"
}; // Credentials.
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var player;
var getPlayerStatus = function(dato) {
  player=dato
}
// Connect to Paladins API by creating a session.
pal.connect('PC', (err, res) => {
  // Connection worked.
  if (!err) {
    var sessionId = res;
    // Call /getPlayer using the wrapper.
    pal.getPlayerStatus(sessionId, 'PC', player, (err, res) => {
      if (!err) {
        const content = JSON.stringify(res);
        fs.writeFile("./server/program/metodos/salida/getPlayerStatus.json", content, 'utf8', function(err) {
        });
      }
    });
  }
});
module.exports = getPlayerStatus
