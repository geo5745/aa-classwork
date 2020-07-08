console.log("Webpack test");  

const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./game.js'); // require appropriate file

game = new Game();
view = new View();

  $(() => {
    const $figure = $('figure');
    view.setupBoard();
    view.bindEvents();  
    // Your code here
  });

