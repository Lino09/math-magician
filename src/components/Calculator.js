import React, { Component } from 'react';

/* eslint-disable */
export default class Calculator extends Component {
  render() {
    return (
      <div className="calc">
        <p className="calc-screen">0</p>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button" className="">%</button>
        <button type="button" className="calc-operation">&#247;</button>
        <button type="button" className="calc-num">7</button>
        <button type="button" className="calc-num">8</button>
        <button type="button" className="calc-num">9</button>
        <button type="button" className="calc-operation">X</button>
        <button type="button" className="calc-num">4</button>
        <button type="button" className="calc-num">5</button>
        <button type="button" className="calc-num">6</button>
        <button type="button" className="calc-operation">-</button>
        <button type="button" className="calc-num">1</button>
        <button type="button" className="calc-num">2</button>
        <button type="button" className="calc-num">3</button>
        <button type="button" className="calc-operation">+</button>
        <button type="button" className="calc-num calc-zero">0</button>
        <button type="button">.</button>
        <button type="button" className="calc-operation">=</button>
      </div>
    );
  }
}
