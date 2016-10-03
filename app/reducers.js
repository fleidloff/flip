export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, new Card()];
    default:
      return state
  }
}

class Card {
	constructor() {
		this.leftSide = getColor();
		this.rightSide = getColor({ not: this.leftSide });
	}
}

const colors = [ "blue", "green", "yellow" ];
function getColor({ not = "" } = {}) {
	let result = null;

	while (result === null || result === not) {
		result = colors[Math.floor(Math.random()*colors.length)];	
	}
	return result;
}