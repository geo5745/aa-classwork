import React from 'react';
import { Tile } from './tile.jsx';


class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        
        const board = this.props.board.grid;
        const myMap = board.map((row,i)=>{
           return row.map((tile, j)=>{
                return <Tile key={`${i}${j}`} tile={tile} updateGame = {this.props.updateGame} />
           });
        });
        // debugger;
        return (
            <div>
                {myMap}
            </div>
        )

    }
}

export default Board;


