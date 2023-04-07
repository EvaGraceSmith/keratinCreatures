import React, { useState, useEffect } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'
import '@picocss/pico'
import Likes from './components/Likes'
import Cards from './components/Cards'





function App() {
  const [data, setData] = useState([]);
let [beastInfo, setBeastInfo] = useState(null);
  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>

      <Cards onChoice={(info) => { setBeastInfo(info)}}/>
      {beastInfo && 
<article>
  <hgroup>
    <div style={{
      display: 'flex',
      gap: '1rem',
    }}>
      <img style={{ width: '200px' }}
      key={beastInfo._id} src={beastInfo.image_url} alt={beastInfo.title} />
      <hgroup>
        <h2>{beastInfo.title}</h2>
        <p>{beastInfo.description}</p>
      </hgroup>
    </div>
  </hgroup>

</article>
}
       
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
