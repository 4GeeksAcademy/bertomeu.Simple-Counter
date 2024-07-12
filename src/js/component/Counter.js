
import React from 'react'



const Counter = ({ counters }) => {
  const six = Math.floor(counters / 100000) % 10;
  const five = Math.floor(counters / 10000) % 10;
  const four = Math.floor(counters / 1000) % 10;
  const three = Math.floor(counters / 100) % 10;
  const two = Math.floor(counters / 10) % 10;
  const one = Math.floor(counters / 1) % 10;
  return (
    <div className="counter d-inline-flex fs-1 text-white p-4 justify-content-center mt-5" style={{ background: "black", width: "100%" }} >
      <div className="clock p-2 bg-dark m-2"><i className="fa-regular fa-clock"></i></div>
      <div className="p-2 bg-dark m-2" >{six}</div>
      <div className="p-2 bg-dark m-2" >{five}</div>
      <div className="p-2 bg-dark m-2" >{four}</div>
      <div className="p-2 bg-dark m-2" >{three}</div>
      <div className="p-2 bg-dark m-2" >{two}</div>
      <div className="p-2 bg-dark m-2" >{one}</div>
    </div>
  );
}
export default Counter

