import React,{Component} from 'react';
class Weather extends Component{
render(){
  return (
     <div>
         <p>Location: {this.props.city}</p>
         <p>Temperature: {this.props.temperature}</p> 
          <p>Humidity: {this.props.humidity}</p> 
         <p>Condition: {this.props.description}</p>  
     </div>
  )
}}
export default Weather;