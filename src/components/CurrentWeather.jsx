import React from 'react'
import '../Css/Currentweather.css'
import { WiHumidity } from "react-icons/wi";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { MdAir } from "react-icons/md";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { TiWaves } from "react-icons/ti";

const CurrentWeather = ({ data }) => {


  return (
    <div className='weather'>
      <div className="weather-container">
        <div className="weather-main">
          <h1>5<sup>o</sup>c </h1>
          <img
            id="wicon"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon" width={200} >
          </img>
        </div>
        <div className="weather-name">
          <h3>{data.weather[0].description} </h3>
          <p>Feels_like {data.main.feels_like} <sup>o</sup>C</p>
        </div>
      </div>

      <div className="weather-container2">
        <div className="weather-con">
          <div className="wind-icon">
            <span><MdAir fontSize={60} /></span>
            <p><span className='air' >Speed</span> <span className='air-data'>{data.wind.speed} m/s </span>  </p>
            <p><span className='air' >Deg </span> <span className='air-data'> {data.wind.deg}</span>  </p>
          </div>
          <div className="sunset">
            <p>
              <label htmlFor="">Sunrise </label>
              <span className='sun' ><IoSunny fontSize={60} /> <span className='sundata' >{data.sys.sunrise}</span> </span>
            </p>
            <p>
              <label htmlFor="">Sunset</label>
              <span className='sun' ><FaRegMoon fontSize={50} /> <span className='sundata' >{data.sys.sunset}</span></span>
            </p>
          </div>
        </div>

        <div className="air-quality">
          <p>
            <label htmlFor="">Humidity</label>
            <span className='title' > <WiHumidity fontSize={80} /><span className='datas'>{data.main.humidity}  %</span></span>
          </p>
          <p>
            <label htmlFor="">Visibility </label>
            <span className='title'><MdOutlineVisibility fontSize={50} /> <span className='datas'>{data.visibility}</span></span>
          </p>
          <p>
            <label htmlFor="">Pressure</label>
            <span className='title'><TiWaves fontSize={70} /> <span className='datas'>{data.main.pressure} hpa</span> </span>
          </p>
          <p className='temprature'>
             <label htmlFor="">Temperature</label>
             <span className='title' > <FaTemperatureThreeQuarters fontSize={50} /><span className='datas'> {data.main.temp} C </span> </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather