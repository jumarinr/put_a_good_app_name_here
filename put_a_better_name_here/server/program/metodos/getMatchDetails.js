var fs = require('fs'); // Write to file.
const paladins = require('paladins-api'); // API wrapper.
var config = {
  devId: "2875",
  authKey: "9ECB6530591C42139C1620264B3195DF"
};
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var matchId;
var variable;
var getMatchDetails = function(dato, dato1) {
  matchId = dato
  variable = dato1
  if (variable) {
    pal.connect('PC', (err, res) => {
      // Connection worked.
      if (!err) {
        var sessionId = res;
        // Call /GetMatchHistory using the wrapper.
        pal.getMatchDetails(sessionId, 'PC', matchId, (err, res) => {
          if (!err) {
            const content = JSON.stringify(res);
            fs.writeFile("./server/program/metodos/salida/getMatchDetails.json", content, 'utf8', function(err) {});
          }
        });
      }
    });
  }
}
module.exports = getMatchDetails;
