var jquery = require('jquery');

module.exports = {

	addContent: function() {
    console.log("halohalo", jquery('h1'));
		jquery('h1').html('Dynamic content here!');
	}

};