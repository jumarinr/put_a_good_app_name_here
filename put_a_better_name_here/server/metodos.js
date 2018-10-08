const paladins = require('paladins-api'); // API wrapper.
var config = {
  devId: "2875",
  authKey: "9ECB6530591C42139C1620264B3195DF"
};
const pal = new paladins(config.devId, config.authKey);
module.exports = class {
  constructor(sessionId, player) {
    (!sessionId) ? console.log('Error: No sessionId specified.'): this.sessionId = sessionId;
    (!player) ? console.log('Error: No player specified.'): this.player = player;
  }
  pal.getPlayer(sessionId, 'PC', player, (err, res) => //obtenemos datos del usuario basicos
    {
      console.log(res);
    })
  pal.getMatchHistory(sessionId, 'PC', 'lokljua', (err, res) => //obtemos info de las ultimas 50 partidas
    {
      console.log(res);

    })
  pal.getMatchDetails(sessionId, 'PC', match_id, (err, res) => //obtenemos datos del usuario basicos
    {
      console.log(res);
    })
}
