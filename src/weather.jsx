import React from 'react'
import { useEffect,useState } from 'react'
import "./weather.css"
import WeatherInfo from './WeatherInfo'
import ModelView from './3dView'

const Weather = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
    
        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)

        getWeather()
      }, [lat, long]);


      const isEmptyArray=(obj)=> {
        return Array.isArray(obj) && obj.length === 0;
      }

      const getWeather= async ()=>{
        if(isEmptyArray(lat)||isEmptyArray(long))
        {
            return;
        }
        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }

    return (
        <div className='Outer'>
            <div className='Display'>
                <ModelView data={isEmptyArray(data)?null:data}/>
            </div>
            <WeatherInfo data={data}/>
        </div>
    )
}

export default Weather
