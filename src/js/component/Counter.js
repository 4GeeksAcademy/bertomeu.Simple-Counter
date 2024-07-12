
import React from 'react'



const Counter = ({numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix}) => {
  return (
    <div className="counter d-inline-flex fs-1 text-white p-4 justify-content-center mt-5" style={{ background: "black", width: "100%" }} >
      <div className="clock p-2 bg-dark m-2"><i className="fa-regular fa-clock"></i></div>
      <div className="number6 p-2 bg-dark m-2" >{numberSix % 10}</div>
      <div className="number5 p-2 bg-dark m-2" >{numberFive % 10}</div>
      <div className="number4 p-2 bg-dark m-2" >{numberFour % 10}</div>
      <div className="number3 p-2 bg-dark m-2" >{numberThree % 10}</div>
      <div className="number2 p-2 bg-dark m-2" >{numberTwo % 10}</div>
      <div className="numer1 p-2 bg-dark m-2" >{numberOne % 10}</div>
    </div>
  );
}
export default Counter

