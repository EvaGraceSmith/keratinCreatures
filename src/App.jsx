import React, { useState, useEffect } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>

      <div>
      {data.map((item) => (
        <img key={item._id} src={item.image_url} alt={item.title} />
      ))}
    </div>

    </hgroup>
  )
}

export default App
