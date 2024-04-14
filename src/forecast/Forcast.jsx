import React from 'react'
import '../Css/ForeCast.css'
import Table from '../table/Table'
const Forcast = ({ data }) => {

    const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const dayinWeek = new Date().getDay()
    const forcastDays = WeekDays.slice(dayinWeek, WeekDays.length).concat(WeekDays.slice(0, dayinWeek))

    console.log(forcastDays)

    return (
        <>
            <div className="forecast">
                {data.list.splice(0, 7).map((value, idx) => {
                    return <div key={idx}>
                        <div className="Forecast-wrapper">
                            <div className="forecast-container">
                                <h2>{forcastDays[idx]}</h2>
                                <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className="forecast-details">
                                <p>{value.weather[0].description}</p>
                                <h3>{value.main.temp}<sup>o</sup>C </h3>
                                <p>{value.dt_txt}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <Table />
        </>
    )
}

export default Forcast