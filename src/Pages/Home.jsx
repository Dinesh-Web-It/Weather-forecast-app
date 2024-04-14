import React, { useState } from 'react'
import '../Css/Home.css'
import Search from '../components/Search'
import CurrentWeather from '../components/CurrentWeather'
import Forcast from '../forecast/Forcast'

const Home = () => {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)

  const weatherApis = 'https://api.openweathermap.org/data/2.5/'
  const Apikey = '9139558fad4b5f70317a0f95e843ff61'

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("")

    const currntWeatherapi = fetch(`${weatherApis}weather?lat=${lat}&lon=${lon}&appid=${Apikey}&units=metric`)
    const forecastWeatherapi = fetch(`${weatherApis}forecast?lat=${lat}&lon=${lon}&appid=${Apikey}&units=metric`)

    Promise.all([currntWeatherapi, forecastWeatherapi])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.lable1, ...weatherResponse });
        setForecastWeather({ city: searchData.value, ...forecastResponse });
      })
      .catch((err) => console.log(err))
  }
  console.log(currentWeather)
  console.log(forecastWeather)

  return (
    <div >
      <div >
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecastWeather && <Forcast data={forecastWeather} />}
      </div>
    </div>
  )
}

export default Home