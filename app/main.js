/* require('file?name=index.html!./index.html'); */

var module1 = require('./modules/module1');
var module2 = require('./modules/module2');

module1.addContent();
module2.doStyle();