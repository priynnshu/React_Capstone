import { useState } from "react"
import SearchBar from "./Components/SearchBar"
import WeatherCard from "./Components/WeatherCard"
import getWeather from "./services/api"
function App(){
  const [weather, setWeather] =
    useState(null)
  async function searchCity(city){
    if(city===""){
      return
    }
    let data =
      await getWeather(city)
    setWeather(data)
  }
  return (
    <div>
      <h1>
        Smart Travel Planner 🌍
      </h1>
      <SearchBar onSearch={searchCity}/>
      <WeatherCard weather={weather}/>
    </div>
  )
}
export default App