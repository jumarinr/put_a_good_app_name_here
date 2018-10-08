var fs = require('fs'); // Write to file.
const paladins = require('paladins-api'); // API wrapper.
var config = {
  devId: "2875",
  authKey: "9ECB6530591C42139C1620264B3195DF"
};
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var player = 'sebaswolf214';
var getMatchHistory;
pal.connect('PC', (err, res) => {
  // Connection worked.
  if (!err) {
    var sessionId = res;

    // Call /GetMatchHistory using the wrapper.
    getMatchHistory = pal.getMatchHistory(sessionId, 'PC', player, (err, res) => {
      if (!err) {
        const content = JSON.stringify(res);
        fs.writeFile("GetMatchHistory.txt", content, 'utf8', function(err) {
          if (err) {
            return console.log(err);
          }
        });
      }
    });
  }
});
module.exports.getMatchHistory = getMatchHistory;
