var fs = require('fs');                        // Write to file.
const paladins = require('paladins-api');    // API wrapper.
var config = require('./config');            // Credentials.
const pal = new paladins(config.devId, config.authKey); // Give our credentials.

// Connect to Paladins API by creating a session.
pal.connect('PC', (err, res) =>
    {
    // Connection worked.
    if(!err)
        {
        var sessionId = res;

        // Call /GetMatchHistory using the wrapper.
        pal.getMatchHistory(sessionId, 'PC', 'z1unknown', (err, res) =>
            {
            // It worked and we got a response, so...
            if(!err)
                {
                // Write the output to a file.
                const content = JSON.stringify(res);
                fs.writeFile("out.txt", content, 'utf8', function (err)
                    {
                    if (err)
                        {
                        return console.log(err);
                        }

                    console.log("Response saved! Done.");
                    });
                }
            });
        }
    });
