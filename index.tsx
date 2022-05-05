import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

type Player = {
  index: number;
  name: string;
};

interface AppProps {}

interface AppState {}

const Player = ({ id, name }) => {
  return (
    <div className="player">
      <div>{id}</div>
      <div><input value={name}></input></div>
      <div><input placeholder="firstname" /></div>      
    </div>
  );
};

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      players: [
        {
          id: 1,
          name: 'sharma',
        },
        {
          id: 2,
          name: 'kohali',
        },
        {
          id: 3,
          name: 'raina',
        },
      ],
    };
  }

  handleReverse = () => {
    this.setState((prevState) => {
      const { players } = prevState;
      players.sort((a, b) => b.id - a.id);
      console.log([...players]);
      return {
        ...prevState,
        players,
      };
    });
  };

  handleAddToTop = () => {
    this.setState((prevState) => {
      const { players, count } = prevState;
      const newList = [{ id: 4, name: `player-${count}` }, ...players];
      console.log([...players]);

      return {
        ...prevState,
        players: newList,
        count: count + 1,
      };
    });
  };

  render() {
    const { players } = this.state;
    return (
      <div>
        <Hello />
        {players.map((player, index) => {
          return <Player key={player.id} {...player}></Player>;
        })}
        <br />
        <button onClick={this.handleReverse}> Reverse</button>
        <button onClick={this.handleAddToTop}> add to TOP</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
