import React from 'react';
import ReactDOM from 'react-dom';
// import { Clock } from './frontend/clock.jsx'
// import { sayHello } from './frontend/clock.jsx'
// import Clock from './frontend/clock.jsx';
// import Tab from './frontend/tab.jsx';
import Root from './frontend/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
    const names = ['Abba', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah', 'Sally', 'Xander'];
    const root = document.getElementById("root");
    ReactDOM.render(<Root names={names}/>, root);
    // new Clock(arg1, arg2);   <-- regular javascript 
    // <Clock arg1 = "arg1value" arg2 = "arg2value" />  <-- react syntax


});
