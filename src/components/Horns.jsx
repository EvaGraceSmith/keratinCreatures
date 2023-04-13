import React, { useState } from 'react';
import data from '../data.json';



const HornedImages = ({ setDataChange}) => {
  const [selectedHornCount, setSelectedHornCount] = useState(0);

  const handleSelect = (event) => {
    setSelectedHornCount(parseInt(event.target.value));
    setDataChange(parseInt(event.target.value));
  };

  const filteredData = data.filter((item) => item.horns === selectedHornCount);

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
      {/* <div className="image-grid">
        {filteredData.map((item) => (
          <img
            key={item._id}
            src={item.image_url}
            alt={item.title}
            className="image-item"
          />
        ))}
      </div> */}
    </div>
  );
};

export default HornedImages;
