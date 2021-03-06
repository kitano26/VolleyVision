import React, { useState } from "react";
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 10px 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin-right: 10px;
`;

function AttemptCounter() {
  // Set the initial count state to zero, 0
  const [attemptCount, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
        <h6>Attempt Count: {attemptCount}</h6>
      </div>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
}

export default AttemptCounter;