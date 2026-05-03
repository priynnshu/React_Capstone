import { useState } from "react"
function SearchBar(){
    const [city,setCity]=useState("")
    return (
        <div>
        <input type="text" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)}></input>
        <button onClick={()=>SearchBar()}>Search</button>
        
        </div>
    )
}
export default SearchBar;