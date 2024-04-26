import React from 'react';
import '../input/input.css'

const CityInput = ({ city, setCity }) => {
  return (
    <input
    className='input_text'
      type="text"
      placeholder="Enter city name"
      spellCheck="false"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  );
};

export default CityInput;

