import React from 'react'
import "./weather.css";
const WeatherInfo = ({data}) => {
    const isEmptyArray=(obj)=> {
        return Array.isArray(obj) && obj.length === 0;
    }
    
    const capitilizeFirstLetters=(sentence)=>{
            let words = sentence.split(" ");

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

             return words.join(" ");
    }

    const cToF=(c)=>{
        return ((c * (9/5)) + 32);
    }

    const roundBetter=(n)=>{
        return Math.round(n*10)/10
    }

  return (

 <div className='Text'>
                {isEmptyArray(data)&&"Waiting for access to device location"}
                {
                  !isEmptyArray(data) &&data.name!==null&& data.weather!==undefined && data.weather.length>0 &&<React.Fragment><div className='TextBox'>
                   <div>{roundBetter( cToF( data.main.temp))} &deg;F</div>
                    <div> {capitilizeFirstLetters( data.weather[0].description)}</div>
                    <div> {data.name}</div>
                    </div>
                    </React.Fragment> 
                }
            </div>  )
}

export default WeatherInfo