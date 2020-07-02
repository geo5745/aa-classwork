class Clock {
  constructor() {
    // 1. Create a Date object.
    this.myDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.myDate.getHours();
    this.minutes = this.myDate.getMinutes();
    this.seconds = this.myDate.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    //setInterval(this._tick, 1000);
    
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.myDate.getHours()}:${this.myDate.getMinutes()}:${this.myDate.getSeconds()}`);
  }

  _tick() {
    
    // 1. Increment the time by one second.

    const addSec = function() {
      this.myDate.setSeconds(
        this.myDate.getSeconds() +1)
      this.printTime();
      };

    setInterval(addSec.bind(this), 1000);
    // 2. Call printTime.
    
  }
}

// const clock = new Clock();
// clock._tick();
//console.log(clock.printTime());

// readline and require libraries are provided by node environment NOT by browser

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// .question(prompt, callback)

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
    return;
  }

  reader.question("Please enter a number... ", (answer) => {
    sum = sum + parseInt(answer);
    console.log(sum);
    addNumbers(sum, numsLeft-1, completionCallback);
  });
}


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function askIfGreaterThan(el1, el2, callback) {
      reader.question(`Is ${el1} > ${el2}? (yes or no)...`, function(answer) {
          if (answer === "yes") {
            callback(true);
            reader.close();
          } else {
            callback(false);
            reader.close();
          }
      });
}

// function sampleCallback


askIfGreaterThan(3,5,console.log);