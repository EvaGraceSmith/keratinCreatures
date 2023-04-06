import React, { useState, useEffect } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'
import '@picocss/pico'
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>

      
       
        {data.map((item) => (
          <article>
        <img key={item._id} src={item.image_url} alt={item.title} />
        </article>
      ))}
        

    

    </hgroup>
  )
}

export default App
