import React, { useState } from 'react';

const ModelControl = ({ onRunModel }) => {
  const [inputValue, setInputValue] = useState(5);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Input Value: </label>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={() => onRunModel(parseInt(inputValue, 10))}>Run Model</button>
    </div>
  );
};

export default ModelControl;
