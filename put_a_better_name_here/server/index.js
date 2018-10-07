var fs = require('fs');                        // Write to file.
const paladins = require('paladins-api');    // API wrapper.
var config =     {
    devId: "2875",
    authKey: "9ECB6530591C42139C1620264B3195DF"
    };
         // Credentials.
const pal = new paladins(config.devId, config.authKey); // Give our credentials.

// Connect to Paladins API by creating a session.
pal.connect('PC', (err, res) =>
    {
    // Connection worked.
    if(!err)
        {
        var sessionId = res;

        // Call /GetMatchHistory using the wrapper.
        pal.getPlayer(sessionId, 'PC', '5373472', (err, res) =>
            {
            console.log(res);

            });
        }
    });
