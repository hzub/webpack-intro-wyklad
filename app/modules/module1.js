
class mojaKlasa {
	constructor(x) {
		this.zmienna = x;
	}
	getVariable(y) {
		return ((z) => {
			return this.zmienna * z;
		})(y);
	}
}

module.exports = mojaKlasa;