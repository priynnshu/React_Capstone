function WeatherCard({weather}){
  if(!weather){
    return null
  }
  if(weather.cod !== 200){
    return (
      <p>
        City not found
      </p>
    )
  }
  return (
    <div>
      <h2>
        {weather.name}
      </h2>
      <p>
        Temperature : {weather.main.temp}°C
      </p>
      <p>
        Weather : {weather.weather[0].main}
      </p>
      <p>
        Humidity :
        {weather.main.humidity}%
      </p>
    </div>
  )
}
export default WeatherCard