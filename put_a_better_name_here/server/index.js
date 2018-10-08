var metodos = require('./metodos');
pal.connect('PC', (err, res) =>
    {
    // Connection worked.
    if(!err)
        {
        var sessionId = res;

        // Call /GetMatchHistory using the wrapper.
        pal.getMatchHistory();

        }
    });
