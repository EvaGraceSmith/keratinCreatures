import React, { useState, useEffect,props } from 'react';
import jsonData from './data.json'; // assuming your JSON file is named data.json
import './App.css'
import '@picocss/pico'
import Cards from './components/Cards'
import Modals from './components/Modals'
// import Search from './components/Search'
import Horns from './components/Horns'




function App() {
  const [data, setData] = useState([]);
  let [beastInfo, setBeastInfo] = useState(null);
  useEffect(() => {
    setData(jsonData);
  }, []);
  const [numberofHorns, setnumberofHorns] = useState([]);
  const handleDataChange = (newData) => {
    console.log("handleDataChange ", newData);
    setnumberofHorns(newData);

    if (numberofHorns >0){
      filteredData = beastInfo.filter((item) => item.horns === numberofHorns);}
  }
  let filteredData = beastInfo;
  



  return (
    <hgroup>
      <h1>Keratin-filled Conical Creatures</h1>
      <Horns setDataChange={handleDataChange}/>
      <Cards onChoice={(info) => { setBeastInfo(info) }} />
      {beastInfo && <Modals beast={filteredData} handleClose={() => { setBeastInfo(null) }} />}






    </hgroup>
  )
}

export default App
