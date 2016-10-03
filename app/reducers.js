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
		this.rightSide = getColor();
	}
}

const colors = [ "red", "orange", "yellow" ];
function getColor() {
	return colors[Math.floor(Math.random()*colors.length)];
}