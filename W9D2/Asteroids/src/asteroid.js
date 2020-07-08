const MovingObject = require("./moving_object");

function Asteroid(pos) {
    let radius = 20;
    let color = "gray";
    let vel = Util.randomVec(2);
    MovingObject.call(this, pos, vel, radius, color);


}

module.exports = Asteroid;

// function Dog (name, coatColor) {
//     // call super-constructor function on **the current `Dog` instance**.
//     Animal.call(this, name);
  
//     // `Dog`-specific initialization
//     this.coatColor = coatColor;
//   }