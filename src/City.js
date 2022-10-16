import React from 'react'
import 'animate.css'

const City = (props) => {

    return (
        <div key={props.forecast.main.temp} className="forecastbox animate__bounceIn">
            <p className="forecast--date">{`${props.forecast.dt_txt}`.slice(2,11)} <br />
            {`${props.forecast.dt_txt}`.slice(11,16)}</p>
            <p className="forecast--temp">{props.forecast.main.temp} °C</p>
            <img className="forecast--icon" src={` http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`} alt="icon" />
            <p className="forecast--sky">{props.forecast.weather[0].main}</p>
            <p className="forecast--comment">({props.forecast.weather[0].description})</p>
        </div>
    )
}

export default City;