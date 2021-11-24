import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: '0',
        next: '',
        operation: '',
      },
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress = (obj, btn) => {
    const newObj = calculate(obj, btn);
    if (!newObj.next && !newObj.total) {
      newObj.next = 0;
    }
    this.setState({ obj: newObj });
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="calc">
        <p className="calc-screen">
          {obj.total}
          {obj.operation}
          {obj.next}
        </p>
        <button onClick={() => this.onButtonPress(obj, 'AC')} type="button">AC</button>
        <button onClick={() => this.onButtonPress(obj, '+/-')} type="button">+/-</button>
        <button onClick={() => this.onButtonPress(obj, '%')} type="button" className="">%</button>
        <button onClick={() => this.onButtonPress(obj, '÷')} type="button" className="calc-operation">÷</button>
        <button onClick={() => this.onButtonPress(obj, '7')} type="button" className="calc-num">7</button>
        <button onClick={() => this.onButtonPress(obj, '8')} type="button" className="calc-num">8</button>
        <button onClick={() => this.onButtonPress(obj, '9')} type="button" className="calc-num">9</button>
        <button onClick={() => this.onButtonPress(obj, 'x')} type="button" className="calc-operation">x</button>
        <button onClick={() => this.onButtonPress(obj, '4')} type="button" className="calc-num">4</button>
        <button onClick={() => this.onButtonPress(obj, '5')} type="button" className="calc-num">5</button>
        <button onClick={() => this.onButtonPress(obj, '6')} type="button" className="calc-num">6</button>
        <button onClick={() => this.onButtonPress(obj, '-')} type="button" className="calc-operation">-</button>
        <button onClick={() => this.onButtonPress(obj, '1')} type="button" className="calc-num">1</button>
        <button onClick={() => this.onButtonPress(obj, '2')} type="button" className="calc-num">2</button>
        <button onClick={() => this.onButtonPress(obj, '4')} type="button" className="calc-num">3</button>
        <button onClick={() => this.onButtonPress(obj, '+')} type="button" className="calc-operation">+</button>
        <button onClick={() => this.onButtonPress(obj, '0')} type="button" className="calc-num calc-zero">0</button>
        <button onClick={() => this.onButtonPress(obj, '.')} type="button">.</button>
        <button onClick={() => this.onButtonPress(obj, '=')} type="button" className="calc-operation">=</button>
      </div>
    );
  }
}
