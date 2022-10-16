import React from 'react'
import 'animate.css'

const SearchResult = (props) => {
    return (
        <div>
            <h2>{props.searchResult.name} - {props.searchResult.sys.country}</h2>
            <div className="searchdata animate__bounceIn">
                <div className="searchdata--field1">
                    <p>Temperature: {props.searchResult.main.temp} °C</p>
                    <p>Feels: {props.searchResult.main.feels_like} °C</p>
                </div>
                <div className="searchdata--field2">
                    <img className="searchdata--icon" src={`http://openweathermap.org/img/wn/${props.searchResult.weather[0].icon}@4x.png`} alt="icon" />
                    <p className="searchdata--sky">{props.searchResult.weather[0].main} ({props.searchResult.weather[0].description})</p>
                </div>
                <div className="searchdata--field3">
                    <p>Humidity: {props.searchResult.main.humidity}%</p>
                    <p>Wind: {props.searchResult.wind.speed} km/h</p>
                </div>
            </div>
          </div>
    )
}

export default SearchResult;