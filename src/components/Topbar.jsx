import React, { useState } from 'react'
import '../Css/Topbar.css'
import cloud from '../Assets/cloudy.png'

const Topbar = ({ search, setSearch, weather }) => {

    const Api = {
        data: 'https://api.openweathermap.org/data/2.5/',
        key: '9139558fad4b5f70317a0f95e843ff61'
    }

    const [apiData, setApiData] = useState({})

    const lat = weather.weather ? weather?.coord?.lat : null
    const lon = weather.weather ? weather?.coord?.lon : null

    function getWeatherData() {


        fetch(`${Api.data}forecast?lat=${lat}&lon=${lon}&appid=${Api.key}`)
            .then((res) => res.json())
            .then((output) => {
                setApiData(output)
                console.log("k", output)

            })
        console.log("hai", lat, lon)
    }
    

    return (
        <div>
            <div className="top-container">
                <div className="wrapper1">
                    <img src={cloud} alt="" width={50} />
                    <h2  >Weather </h2>
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder='Search city...'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button onClick={search} >Call api</button>
                <div className="location">
                    <h3 onClick={ getWeatherData } >Current Location</h3>
                </div>
            </div>
        </div>
    )
}

export default Topbar;