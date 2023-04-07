import React, { useState, useEffect } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'
import '@picocss/pico'
import Cards from './components/Cards'
import Modals from './components/Modals'





function App() {
  const [data, setData] = useState([]);
  let [beastInfo, setBeastInfo] = useState(null);
  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>

      <Cards onChoice={(info) => { setBeastInfo(info) }} />
      {beastInfo && <Modals beast={beastInfo} handleClose={() => { setBeastInfo(null) }} />}






    </hgroup>
  )
}

export default App
