import React, { useState, useEffect,props } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'
import '@picocss/pico'
import Cards from './components/Cards'
import Modals from './components/Modals'
// import Search from './components/Search'
import Horns from './components/Horns'


function App() {
  const [numberOfHornsRequested, setNumberOfHornsRequested] = useState(0);

  const [data, setData] = useState([]);
  const [beastInfo, setBeastInfo] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const handleDataChange = (event) => {
    console.log("numberOfHorns", event.target.value);
    setNumberOfHornsRequested(event.target.value);
  }


  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>
      <Horns onDataChange={handleDataChange}/>
      <Cards numberOfHornsRequested= {numberOfHornsRequested} onChoice={(info) => { setBeastInfo(info) }} />
      {beastInfo && <Modals beast={beastInfo} handleClose={() => { setBeastInfo(null) }} />}






    </hgroup>
  )
}

export default App
