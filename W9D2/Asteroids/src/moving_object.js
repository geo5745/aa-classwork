


const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

// moving_object.js
function MovingObject(pos,vel,radius,color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;    
  }

  MovingObject.prototype.draw = function(ctx) {
      let pos = this.pos;
      let radius = this.radius;
      let color = this.color;

      ctx.beginPath();
      ctx.arc(pos[0], pos[1],radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
  }

  MovingObject.prototype.move = function(ctx) {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }


  
module.exports = MovingObject;

