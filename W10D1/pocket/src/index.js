import {partyHeader} from "./warmup";
import {htmlGenerator} from "./warmup";
//import warmUp from "./warmup.js"; // DOES NOT WORK. WHY?
import {Clock} from "./clock.js";

const clockDiv = document.getElementById('clock');
console.log(clockDiv);

const myClock = new Clock(htmlGenerator,clockDiv);


//htmlGenerator('Party Time.', partyHeader);

//const clockDiv = document.getElementById('clock');
//htmlGenerator('Party Time.', clockDiv);


// warmUp.htmlGenerator('Party Time.', partyHeader);
// individual import works, but importing the entire page doesn't. WHY?

