const getWeather = async (city) => {
  const WEATHER_KEY =
    "ed4f6abe5120ec0d3fe64bb483c016ee"
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`
  )
  return res.json()
}
const getPlaces = async (city) => {
  const PLACE_KEY ="f98b230995e8457694eb965971d2abce"
  let cityRes =
    await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=${PLACE_KEY}`
    )
  let cityData =
    await cityRes.json()
  let lat =
    cityData.features[0].properties.lat
  let lon =
    cityData.features[0].properties.lon
  let placeRes =
    await fetch(
      `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:${lon},${lat},5000&limit=10&apiKey=${PLACE_KEY}`
    )
  return placeRes.json()
}
export {getWeather,getPlaces
}