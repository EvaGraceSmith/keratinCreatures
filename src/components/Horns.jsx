import React, { useState, props } from 'react';
import data from '../data.json';



const HornedImages = () => {
  const [selectedHornCount, setSelectedHornCount] = useState(0);

  const handleSelect = (event) => {
    setSelectedHornCount(parseInt(event.target.value));
    console.log("selectedHornCount ", parseInt(event.target.value));
    props.setDataChange(parseInt(event.target.value));

  };

  return (
    <div>
      <label>
        Select Horn Count:
        <select onChange={handleSelect}>
          <option value={0}>All</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </label>
    </div>
  );
};

export default HornedImages;
