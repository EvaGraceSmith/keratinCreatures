import React, { useState, useEffect } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'
import '@picocss/pico'
import Likes from './components/Likes'
import Cards from './components/Cards'





function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>

      <Cards/>
       
        {data.map((item) => (
          <article>
        <img key={item._id} src={item.image_url} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Likes />

        </article>
      ))}
        

    

    </hgroup>
  )
}

export default App
