import React, {useState} from 'react';
import './App.css';
import {Input, Button, Table, TableRow} from './components';




function App() {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')

  async function getWeather(city) {
    const data = await fetch(`http://api.weatherstack.com/current?access_key=9dc18d9c850ae1c7a6794ddef2095ff3&query=${city}`);
    const parsedData = await data.json()
    return parsedData
  }
  
  const onFindClick = async () => {
    setInputValue('')
    setLoading(true)
    const result = await getWeather(inputValue)
    const {location: {name, country}, current: {temperature}} = result
    console.log(inputValue)
    setData([...data, [name, country, temperature, temperature]])
    setLoading(false)
    
        
  }
  

  const clearTable = () => {
    setData([])
  }

  return (
    <div className="App">
      
      

      <Input value={inputValue} 
            onChange={(e) =>{
              setInputValue(e.target.value)
            }}/>
      <Button onClick={onFindClick}>{loading ? "Loading..." : "Find"}</Button>
      <Button onClick={clearTable}>Clear</Button>
      <Table>
          {
            data.map(([city, country, tempDegC, tempDegF]) => {
                return <TableRow key={city} city={city} country={country} tempDegC={tempDegC} tempDegF={tempDegF}/>
            })
          }
      </Table>
      
      
    </div>
  );
}

export default App;
