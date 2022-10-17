import { useEffect, useState } from 'react';
import './App.css';
import City from './City';
import SearchResult from './SearchResult';

function App() {

  const [search, setSearch] = useState("budapest")
  const [searchResult, setSearchResult] = useState({})
  const [forecastResult, setForecastResult] = useState([])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    searchStart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchStart = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setSearchResult(result)
      }, getForeCast())
  }

  const getForeCast = () => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setForecastResult(result.list)
    })
  }

  const cityResult = forecastResult && forecastResult.map(forecast => {
    return (
      <City
      key = {forecast.dt}
      forecast = {forecast}
      />
    )
  })

  return (
    <div className="App">
      <h1>My Weather App</h1>
      <div>
        <input 
          type="text"
          placeholder="Enter your city"
          onChange={handleChange}
        />
        <button onClick={searchStart}>Search</button>
      </div>
      {typeof searchResult.main !== "undefined" ? (
        <div>
          <SearchResult 
          searchResult = {searchResult}
          />
          <div className="resultbox">
            {cityResult}
          </div>
        </div>
      ) : (
      <p className="error">City not found</p>
      )}
    </div>
  );
}

export default App;
