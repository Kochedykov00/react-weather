import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info'
import Weather from './components/weather'
import Form from './components/form'


const API_KEY = "7fa2eb6c389ea1f1369c4e7080765f5e";





class App extends React.Component {

  state = {

    temp: undefined,
    max_temp: undefined,
    min_temp: undefined,
    feel_temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (event) => {
  event.preventDefault();
  var city = event.target.elements.city.value;
  

if (city) {

  const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${API_KEY}&units=metric`);
  const data =  await api_url.json();
  console.log(data);


  let sunsetInSec = data.sys.sunset
  let date = new Date(sunsetInSec * 1000)
  let timeSunset = date.toLocaleTimeString()

  let sunriseInSec = data.sys.sunrise
  let date1 = new Date(sunriseInSec * 1000)
  let timeSunrise = date1.toLocaleTimeString()

  

this.setState ({
  temp: data.main.temp,
  max_temp: data.main.temp_max,
  min_temp: data.main.temp_min,
  feel_temp: data.main.feels_like,
  city: data.name,
  country: data.sys.country,
  sunrise: timeSunrise,
  sunset: timeSunset,
  error: undefined

});
}
else {

  this.setState ({
  temp: undefined,
  max_temp: undefined,
  min_temp: undefined,
  feel_temp: undefined,
  city: undefined,
  country: undefined,
  sunrise: undefined,
  sunset: undefined,
  error: "Введите название города"

});

}
}



  render() { 
    return (
  <div className = "info">
    <Info />
    <Form weatherMethod={this.gettingWeather}/>
      <div className = "info_about">
  <Weather 
  temp={this.state.temp}
  max_temp={this.state.max_temp}
  min_temp={this.state.min_temp}
  feel_temp={this.state.feel_temp}
  city={this.state.city}
  country={this.state.country}
  sunrise={this.state.sunrise}
  sunset={this.state.sunset}
  error={this.state.error}/>
  </div>
  </div>
);
}
}

export default App;
