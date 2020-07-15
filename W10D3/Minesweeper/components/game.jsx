import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from './board.jsx';

// <Game name="minesweeper"boardsize = 10 />
// new Game(minesweeper,10);

// this.props.name




class Game extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            board: new Minesweeper.Board(10,8)
        };

        this.updateGame = this.updateGame.bind(this);
    }
    

    updateGame() {

    }

    render() {
        return (
            <>
                <Board board = {this.state.board} updateGame = {this.updateGame} />
            </>
        );
    }

};


export default Game;