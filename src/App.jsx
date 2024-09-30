import axios from 'axios'
import './App.css'
import { useState } from 'react';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const API_KEY = "bc34f456aa3cdf5a9511965c666e160d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}lo&appid=${API_KEY}&units=metric`;
  const searcchLocation = (event)=>{
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input
          type ="text"
          className='py-3 px-6 w-[700px] text-lg rounded-3x1 
          border border-grey-200 text-grey-600 placeholder:text-grey-400 focus:outine-none bg-white-600/00 shadow-md
          'placeholder='Enter location'
          value={location}
          onChange={(event)=>setLocation(event.target.value)}
          onKeyDownCapture={searcchLocation}
          />

      </div>
      <div>
        <weathe weatherData={data}/>
      </div>
    </div>
  )
}

export default App
