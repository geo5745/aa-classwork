//import {htmlGenerator} from "./warmup";

//const clockDiv = document.getElementById('clock');



export class Clock {
    constructor(callback,div) {
        const currentTime = new Date();

        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        this.callback = callback;
        this.div = div;
        setInterval(this._tick.bind(this), 1000);
    }

    printTime(){
        let current = `${this.hours} : ${this.minutes} : ${this.seconds}`;
        this.callback.bind(this)(current, this.div);    
        
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
        this.printTime();
        
        
    }
}

//export default clock;
