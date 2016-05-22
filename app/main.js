/* require('file?name=index.html!./index.html'); */

var mojaKlasa = require('./modules/module1');
var module2 = require('./modules/module2');

var obiekt = new mojaKlasa(233);
var wynik = obiekt.getVariable(3);
console.log(`Wynik to ${wynik}`);