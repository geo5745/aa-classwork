console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.Util = Util;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game; 
window.GameView = GameView; 

Util.inherits(Asteroid, MovingObject);

const mo = new MovingObject([30, 30],[10, 10],5,"#00FF00");
const mo2 = new MovingObject([30, 30], [10, 10], 5, "red");
const ast = new Asteroid([100,100]);
const game = new Game();


window.mo = mo;
console.log(mo);
console.log(mo.pos);
window.ast = ast;
window.game = game;



document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('canvas'); // need to grab element from DOM
    canvasEl.height = 500;
    canvasEl.width = 500;
    const ctx = canvasEl.getContext('2d'); // need to get ctx from canvasEl

    // draw black rectangle that takes up entire canvasEl
    ctx.fillRect(0, 0, 500, 500);
    
    const gameview = new GameView(game,ctx);

    gameview.start(ctx);


    // function drawFrame() {
    //     mo.move(ctx);
    //     mo2.draw(ctx);
    //     ast.draw(ctx);
    //     game.draw(ctx);
    //     mo.draw(ctx);
    // }
    // setInterval(drawFrame(),1000);
})