var fs = require('fs'); // Write to file.
const paladins = require('paladins-api'); // API wrapper.
var config = require('./config'); // Credentials.
const pal = new paladins(config.devId, config.authKey); // Give our credentials.
var player = 'sebaswolf214'
// Connect to Paladins API by creating a session.
pal.connect('PC', (err, res) => {
  // Connection worked.
  console.log(err)
  if (!err) {
    var sessionId = res;

    // Call /getPlayer using the wrapper.
    pal.getPlayer(sessionId, 'PC', player, (err, res) => {
      console.log(res);
    });
  }
});
