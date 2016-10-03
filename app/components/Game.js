import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

const Game = ({ cards, onAdd }) => (
  <div>
    <button onClick={onAdd}>add card</button>
    { cards.map((card, idx) => <Card key={idx} data={card} />)}
  </div>
);

Game.propTypes = {
  cards: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { cards: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => dispatch({ type: 'ADD' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game)
