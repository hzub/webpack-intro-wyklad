require('file?name=index.html!./index.html');

var contentModule = require('./modules/contentModule');

var mainStyle = require('./styles/style1.css');
var additionalStyle = require('./styles/style2.css');

contentModule.addContent();
