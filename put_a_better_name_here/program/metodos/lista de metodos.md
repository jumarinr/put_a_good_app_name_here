connect() - Returns a session variable that's required for all API calls. //listo

getPlayer(session, platform, player) - Returns an object with basic player statistics. //listo

getMatchHistory(session, platform, player) - Returns a list of the players most recent matches (50). //listo

getMatchDetails(session, platform, match_id) - Returns details of a specific match. //listo

getChampions(session, platform) - Returns a list of all the champions and details about them. //listo

getItems(session, platform) - Returns all the items in the game, including cards, items etc...//listo

getDataUsed(session, platform) - Returns an object containing resources used.//listo

getPlayerStatus(session, platform, player) - Returns the current status of the player. (offline, in-lobby etc.)//listo

getChampionSkins(session, platform, champ_id) - Returns all skins available for chosen champion.//listo

getChampionRanks(session, platform, player) - Returns details of the players performance with all champions.

getPlayerLoadouts(session, platform, playerId)
