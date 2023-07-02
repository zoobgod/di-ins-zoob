import React, { useState } from 'react';
import './Timeline.css';

function Timeline() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="timeline">
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter input"
        />
        <button type="submit">Add</button>
      </form>
      <div className="timeline-items">
        {items.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-content">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;