import React from 'react';
import Game from './Game';
import ScoreCard from "./Scorecard";

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <ScoreCard />
        <Game />

      </div>
    );
  }
}
