import { useState } from "react"
function SearchBar({
  onSearch
}){
  const [city, setCity] =
    useState("")
  function handleClick(){
    onSearch(city)
    setCity("")
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={handleClick}>
        Search
      </button>
    </div>
  )
}


export default SearchBar