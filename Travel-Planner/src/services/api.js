const getWeather = async (city) => {
  const API_KEY = "ed4f6abe5120ec0d3fe64bb483c016ee"

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
  return res.json()
}
export default getWeather