import { useEffect, useState } from 'react'
import './App.css'
import Loading from './Componentes/Loading'
import Weathers from './Componentes/Weathers'

function App() {
 const [cords, setCords] = useState()
 useEffect(()=>{
  const success = pos => {
    const lasrlon = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCords(lasrlon)
  }
navigator.geolocation.getCurrentPosition(success)

 },[ ])

 return (
    <div className="App">
      
    <Weathers lon={cords?.lon} lat={cords?.lat} />
      
    </div>
  )
}

export default App
