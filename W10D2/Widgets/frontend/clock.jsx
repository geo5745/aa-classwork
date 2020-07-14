//import {htmlGenerator} from "./warmup";
//const clockDiv = document.getElementById('clock');
import React from 'react';


const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','Febr uary','March','April','May','June','July','August','September','October','November','December'];

class Clock extends React.Component{
    constructor() {
        super();
        this.state = {
            time: new Date(),
        };
        this._tick = this._tick.bind(this);
        // const currentTime = new Date();

        // this.hours = currentTime.getHours();
        // this.minutes = currentTime.getMinutes();
        // this.seconds = currentTime.getSeconds();

        // this.callback = callback;
        // this.div = div;
        // setInterval(this._tick.bind(this), 1000);
    }

    sayHello() {

        console.log("Hello");
    }


    render () {
        return (
            <>
                <h1>Clock</h1>
                <div id="clock">
                    <p>
                        <span>Time:</span> 
                        <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</span>
                    </p>
                    <p>
                        <span>Date:</span>
                        <span>
                            {days[this.state.time.getDay()]} {this.state.time.getDate()} {months[this.state.time.getMonth()]} {this.state.time.getFullYear()}
                        </span>
                    </p>  
                </div>
            </>
        );
    }

    // printTime(){
    //     let current = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    //     this.callback.bind(this)(current, this.div);    
        
    // }
    componentDidMount(){
        this.interval = setInterval(this._tick, 1000);
    }

    componentWillUnmount(){
        //debugger;
        clearInterval(this.interval);
    }

    _tick(){
        this.setState({time: new Date()});
    }



}

export default Clock;