import {htmlGenerator} from "./warmup";

const clockDiv = document.getElementById('clock');



class Clock {
    constructor() {
        const currentTime = new Date();

        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        
        setInterval(this._tick.bind(this), 1000);
    }

    printTime(){
        let current = `${this.hours} : ${this.minutes} : ${this.seconds}`;
        return current;
        
    }

    _tick(){
        this.seconds += 1;

        if(this.seconds === 60){
            this.seconds = 0;
            this.minutes += 1;
            if(this.minutes === 60){
                this.minutes = 0;
                this.hours += 1;
            }
        }
        let current = this.printTime();
        htmlGenerator(current, clockDiv);
        
    }
}

console.log("is this running?")
const clock1 = new Clock();
console.log("is this running now?") 

export default clock;
