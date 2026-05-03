import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import getWeather from "./services/api";
function App(){
  const [weather,setWeather]=useState(null)
  return (
    <div>
      <h1>Smart Travel-Planner</h1>
      <SearchBar/>
      
    </div>
  )
}
export default App;