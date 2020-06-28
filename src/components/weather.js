import React from 'react';



const Weather = props => (
   
  <div className = "current_weather">
  {props.city &&
  	<div className = "current_weather_i">
   <p>Город, страна: {props.city}, {props.country}</p>
   <p>Температура: {props.temp} °C</p>
   <p>Максимальная Температура: {props.max_temp} °C</p>
   <p>Минимальная Температура: {props.min_temp} °C</p>
   <p>Ощущается как: {props.feel_temp} °C</p> 
   <p>Восход: {props.sunrise}</p> 
   <p>Заход: {props.sunset}</p> 
  	</div>
  }
  <p className = "error">{props.error}</p>
  </div>
);


export default Weather;