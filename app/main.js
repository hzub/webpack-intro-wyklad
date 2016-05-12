require('file?name=index.html!./index.html');

var contentModule = require('./modules/contentModule');

var style = require('./main.less');

contentModule.addContent();
