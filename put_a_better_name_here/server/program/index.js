var getChampionRanks = require('./server/program/metodos/getChampionRanks');// dato de entrada = usuario de paladins
var getChampions = require('./server/program/metodos/getChampions');// no requiere ningun dato de entrada
//var getChampionSkins = require('./server/program/metodos/getChampionSkins'); // insertar ChampId
var getDataUsed = require('./server/program/metodos/getDataUsed');// no requiere ningun dato de entrada
var getItems = require('./server/program/metodos/getItems'); // no requiere ningun dato de entrada
var getMatchDetails = require('./server/program/metodos/getMatchDetails') // dato de entrada = MatchId
var getMatchHistory=require('./server/program/metodos/getMatchHistory'); // dato de entrada = usuario de paladins
var getPlayer = require('./server/program/metodos/getPlayer'); // dato de entrada = usuario de paladins
var getPlayerLoadouts = require('./server/program/metodos/getPlayerLoadouts');
//var getPlayerStatus = require('./server/program/metodos/getPlayerStatus'); //dato de entrada= usuario de paladins
const lista = ['./server/program/metodos/salida/getPlayerLoadouts.json']
var data = require(lista[0]);
var myString = JSON.stringify(data);
console.log(myString)
