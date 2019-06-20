import React from 'react';

import Form from './form';
import Title from './title';
import Weather from './weather';

const API_KEY ="0b2613e7a6df1d9b264d214cdba24243";
class App extends React.Component {

  state={
  temperature:undefined,
  city:undefined,
  humidity:undefined,
  description:undefined
}
  getWeather = async (e) => {
    e.preventDefault();
const city=e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${API_KEY}&units=metric`);
  
  const response = await api_call.json();
  
  console.log(response);
  this.setState({
    temperature: response.main.temp,
    city: response.name,
    humidity: response.main.humidity,
    description: response.weather[0].description
  })
  }
  render(){
  return (
    <div>
      <Title />
      <Form getWeather={this.getWeather} />
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      humidity={this.state.humidity}
      description={this.state.description}
     />
    </div>
  );
}
}
export default App;
