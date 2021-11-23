import React, { Component } from 'react'

export default class Calculator extends Component {
  render() {
    return (
      <div className="calc">
        <p className="calc-screen">0</p>
        <button>AC</button>
        <button>+/-</button>
        <button className="">%</button>
        <button className="calc-operation">&#247;</button>
        <button className="calc-num">7</button>
        <button className="calc-num">8</button>
        <button className="calc-num">9</button>
        <button className="calc-operation">X</button>
        <button className="calc-num">4</button>
        <button className="calc-num">5</button>
        <button className="calc-num">6</button>
        <button className="calc-operation">-</button>
        <button className="calc-num">1</button>
        <button className="calc-num">2</button>
        <button className="calc-num">3</button>
        <button className="calc-operation">+</button>
        <button className="calc-num calc-zero">0</button>
        <button>.</button>
        <button className="calc-operation">=</button>
      </div>
    )
  }
}
