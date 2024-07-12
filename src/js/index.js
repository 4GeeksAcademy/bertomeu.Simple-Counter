//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";

//render your react application

let counters = 0;

setInterval(function () {
    const six = Math.floor(counters/100000);
    const five = Math.floor(counters/10000);
    const four = Math.floor(counters/1000);
    const three = Math.floor(counters/100);
    const two = Math.floor(counters/10);
    const one = Math.floor(counters/1);
    counters++;

    ReactDOM.createRoot(document.getElementById("app")).render(<Home numberOne={one} numberTwo={two} numberThree={three} numberFour={four} numberFive={five} numberSix={six}/>);
    
    
}, 1000);
