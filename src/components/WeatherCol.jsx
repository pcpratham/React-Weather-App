import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Loading from "./Loading";
import cloud from "../images/cloud.png"
import humidity from "../images/humidity.png"
import wind from "../images/wind.png"

const WeatherCol = () => {
    const {data} = useContext(AppContext);
    // const {fetchLatData,lat,long} = useContext(AppContext);
    // // getLocation();
    // console.log("Weather PAge");
    // // console.log(data);
    // useEffect(()=>{
    //   fetchLatData();
    // },[]);
    const country_img = data?.sys?.country?.toLowerCase();
    // console.log(country_img);
    const url = `https://flagcdn.com/48x36/${country_img}.png`;
    const url_icon = `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`;
  return (
    <div className='mt-4'>
      <div className='flex flex-col items-center gap-4 flex-wrap mt-4 w-[1080px] '>
        <div className='flex gap-4 justify-center'>
          <p className='text-3xl '>
            {data?.name}
          </p>
          <img src={url} />
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <p className='text-2xl '>
            {data?.weather[0]?.description?.toUpperCase()}
          </p>
          <img height={100} width={100}
             src={url_icon}
          />
        </div>
        <div>
          <h2 className='font-bold text-3xl '>
            {data?.main?.temp} °C
          </h2>
        </div>

        <div className='flex flex-wrap gap-4 justify-evenly w-[80%] mt-4 mb-2'>

          <div className='border py-6 px-4 flex flex-col gap-2 justify-center items-center bg-[#869FC0] rounded-md w-[200px]  '>
            <img src={wind} height={100} width={100} />
            <p className='text-2xl '>
              WindSpeed
            </p>
            <p>{data?.wind?.speed} m/s</p>
          </div>

          <div className='border py-6 px-4 flex flex-col gap-2 justify-center items-center bg-[#869FC0] rounded-md w-[200px] '>
            <img src={humidity} height={100} width={100} />
            <p className='text-2xl '>
              Humidity
            </p>
            <p>{data?.main?.humidity}%</p>
          </div>

          <div className='border py-6 px-4 flex flex-col gap-2 justify-center items-center bg-[#869FC0] rounded-md w-[200px]' >
            <img src={cloud} height={100} width={100} />
            <p className='text-2xl '>
              Clouds
            </p>
            <p>{data?.clouds?.all}%</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WeatherCol