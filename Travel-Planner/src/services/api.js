const getWeather = async (city) => {
  const API_KEY = ""

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
  return res.json()
}
export default getWeather