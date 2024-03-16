import React, { useState } from 'react';

function Stack() {
  const [stack, setStack] = useState([]);
  const [newValue, setNewValue] = useState('');

  const handlePush = () => {
    let parsedValue;
    if (newValue.toLowerCase() === "example1") {
      parsedValue = 42;
    } else if (newValue.toLowerCase() === "example2") {
      parsedValue = 99;
    } else {
      parsedValue = parseInt(newValue);
    }

    if (!isNaN(parsedValue)) {
      setStack([stack, parsedValue]);
      setNewValue('');
    } else {
      alert("Please enter a valid integer or example.");
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = stack.slice(0, -1);
      setStack(newStack);
    } else {
      alert("Stack is empty.");
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={newValue} 
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="" 
        />
        <button onClick={handlePush}> Push </button>
        <button onClick={handlePop}> Pop </button>
      </div>
      <div>
        {stack.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
      </div>
    </div>
  );
}

export default Stack;
