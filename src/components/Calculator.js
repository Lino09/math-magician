import React, { useState } from 'react';
import calculate from '../logic/calculate';

const initial = {
  total: '0',
};

const Calculator = () => {
  const [obj, setObj] = useState(initial);
  const onButtonPress = (obj, btnInfo) => {
    const newObj = calculate(obj, btnInfo);
    if (!newObj.next && !newObj.total) {
      newObj.next = '0';
    }
    setObj(newObj);
  };
  return (
    <div className="container">
      <div className="calculator">
        <h1>Let&apos;s do some math!</h1>
        <div className="calc">
          <p className="calc-screen">
            {obj.total}
            {obj.operation}
            {obj.next}
          </p>
          <button onClick={() => onButtonPress(obj, 'AC')} type="button">AC</button>
          <button onClick={() => onButtonPress(obj, '+/-')} type="button">+/-</button>
          <button onClick={() => onButtonPress(obj, '%')} type="button" className="">%</button>
          <button onClick={() => onButtonPress(obj, '÷')} type="button" className="calc-operation">÷</button>
          <button onClick={() => onButtonPress(obj, '7')} type="button" className="calc-num">7</button>
          <button onClick={() => onButtonPress(obj, '8')} type="button" className="calc-num">8</button>
          <button onClick={() => onButtonPress(obj, '9')} type="button" className="calc-num">9</button>
          <button onClick={() => onButtonPress(obj, 'x')} type="button" className="calc-operation">x</button>
          <button onClick={() => onButtonPress(obj, '4')} type="button" className="calc-num">4</button>
          <button onClick={() => onButtonPress(obj, '5')} type="button" className="calc-num">5</button>
          <button onClick={() => onButtonPress(obj, '6')} type="button" className="calc-num">6</button>
          <button onClick={() => onButtonPress(obj, '-')} type="button" className="calc-operation">-</button>
          <button onClick={() => onButtonPress(obj, '1')} type="button" className="calc-num">1</button>
          <button onClick={() => onButtonPress(obj, '2')} type="button" className="calc-num">2</button>
          <button onClick={() => onButtonPress(obj, '3')} type="button" className="calc-num">3</button>
          <button onClick={() => onButtonPress(obj, '+')} type="button" className="calc-operation">+</button>
          <button onClick={() => onButtonPress(obj, '0')} type="button" className="calc-num calc-zero">0</button>
          <button onClick={() => onButtonPress(obj, '.')} type="button">.</button>
          <button onClick={() => onButtonPress(obj, '=')} type="button" className="calc-operation">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
