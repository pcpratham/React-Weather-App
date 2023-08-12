import React, { useContext, useEffect } from 'react'
import WeatherCol from './WeatherCol';
import GrantPage from './GrantPage';
import { AppContext } from '../context/AppContext';
import Loading from './Loading';


const YourWeather = () => {
  const {location,loading,fetchLatData,lat,long} = useContext(AppContext);

  useEffect(()=>{
    fetchLatData(lat,long);
  },[lat,long])
  // setCurrTab("yw");
  return (
    <div>
       <div>
          {/* {loading ? <Loading /> :( location)? <WeatherCol /> : <GrantPage />} */}
          {
            location ? (loading ? (<Loading/>) : (<WeatherCol/>)) : (<GrantPage/>)
          }
        </div>
    </div>
  );
}

export default YourWeather