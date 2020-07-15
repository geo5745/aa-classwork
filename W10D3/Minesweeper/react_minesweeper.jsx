import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx';
import { Tile } from './components/tile.jsx'



console.log("webpack is working");

document.addEventListener("DOMContentLoaded",() => {
    ReactDOM.render(<Game/>,document.getElementById('main'));
});


//import AutoComplete from './auto';


// const names = [
//   'Abba',
//   'Barney',
//   'Barbara',
//   'Jeff',
//   'Jenny',
//   'Sarah',
//   'Sally',
//   'Xander'
// ];

// const panes = [
//   {title: 'one', content: 'I am the first'},
//   {title: 'two', content: 'Second pane here'},
//   {title: 'three', content: 'Third pane here'}
// ];

// function Root() {
//   return(
//     <div>
//       <Clock />
      
//       <div className='interactive'>
//         <Tabs panes={panes} />
//         <AutoComplete names={names} />
//       </div>
//     </div>
//   );
// }

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<Root/>, document.getElementById('main'));
// });