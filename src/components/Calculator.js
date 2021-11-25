import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState(0);
  const onButtonPress = (obj, btnInfo) => {
    const newObj = calculate(obj, btnInfo);
    if (!newObj.next && !newObj.total) {
      newObj.next = 0;
    }
    setObj(newObj);
  };
  return (
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
      <button onClick={() => onButtonPress(obj, '4')} type="button" className="calc-num">3</button>
      <button onClick={() => onButtonPress(obj, '+')} type="button" className="calc-operation">+</button>
      <button onClick={() => onButtonPress(obj, '0')} type="button" className="calc-num calc-zero">0</button>
      <button onClick={() => onButtonPress(obj, '.')} type="button">.</button>
      <button onClick={() => onButtonPress(obj, '=')} type="button" className="calc-operation">=</button>
    </div>
  );
};

export default Calculator;
