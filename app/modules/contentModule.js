var imageUrl = require('../images/image.png');

module.exports = {

	addContent: function() {
		document.querySelector('h1').innerHTML = 'Dynamic content here!';

		document.querySelector('div img').src = imageUrl;

	}
	
};