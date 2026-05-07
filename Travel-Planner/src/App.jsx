import { useState, useEffect } from "react"
import SearchBar from "./Components/SearchBar"
import WeatherCard from "./Components/WeatherCard"
import PlaceCard from "./Components/PlaceCard"
import Itinerary from "./Components/Itinerary"
import "./App.css"
function App(){
  const [weather, setWeather] =useState(null)
  const [places, setPlaces] =useState([])
  const [tripList, setTripList] =useState([])
  const [searchCity, setSearchCity] = useState("")
    useEffect(() => {
    let savedData =
      localStorage.getItem("trip")
    if(savedData){
        setTripList(JSON.parse(savedData))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("trip",JSON.stringify(tripList))
  }, [tripList])

  useEffect(() => {
    async function fetchData() {
      if(searchCity === ""){
        return
      }
      const WEATHER_KEY = "ed4f6abe5120ec0d3fe64bb483c016ee"
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${WEATHER_KEY}&units=metric`
      )
      let weatherData = await weatherRes.json()
      setWeather(weatherData)
      
  
      const PLACE_KEY = "f98b230995e8457694eb965971d2abce"
      let cityRes = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${searchCity}&apiKey=${PLACE_KEY}`
      )
      let cityData = await cityRes.json()
      console.log(cityData)
      let lat = cityData.features[0].properties.lat
      let lon = cityData.features[0].properties.lon
      let placeRes = await fetch(
        `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:${lon},${lat},5000&limit=10&apiKey=${PLACE_KEY}`
      )
      let placeData = await placeRes.json()
      setPlaces(placeData.features)
    }
    fetchData()
  }, [searchCity])
  function handleSearch(city){
    setSearchCity(city)
  }
  function addPlace(place){
    setTripList(
      [...tripList, place]
    )
  }
  function removePlace(index){
    let newList =tripList.filter((_, i) =>i !== index)
    setTripList(
      newList
    )
  }
  return (

    <div className="container">
      <h1>
        Where To Next?
      </h1>
      <p>Discover your next adventure with our smart travel planner!</p>
      <SearchBar
        onSearch={handleSearch}/>
      <WeatherCard
        weather={weather}/>
      {places.length > 0 && (
        <>
      <h2>
        Places To Visit
      </h2>
      <div className="places-box">
        {       
        places.map((item, index) => (
          <PlaceCard key={index} place={item} onAdd={addPlace}/>))}
      </div>
      </>
      )}
      {tripList.length > 0 && (
       <Itinerary tripList={tripList} removePlace={removePlace}/>
      )}
    </div>)}
export default App