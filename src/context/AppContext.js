import { createContext, useEffect, useState } from "react";
import WeatherCol from "../components/WeatherCol";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {


  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [values,setValue] = useState(false);
  const [city,setCity] = useState();
  const [location, setLoaction] = useState();
  const [data, setData] = useState({});
  // const [currTab,setCurrTab] = useState();
  const API_key = "91b8f26991bba04064a266b66b817296";

  //   getLocation();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("Geo Location");
        console.log("lat", lat);
        console.log("long", long);
        // setLoading(true);
        if (lat !== null && long !== null) {
          fetchLatData(lat, long);
          setLoaction(true);
        }
        
      });
    } else {
      console.log("Geo location not supported in Browser");
      setLoaction(false);
    }
  }, [lat, long]);



  async function fetchLatData(lati, longi) {
    const API_lat = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_key}&units=metric`;
    console.log("lat", lat);
    console.log("long", long);
    setLoading(true);
    try {
      const d = await fetch(API_lat);
      const res = await d.json();
      console.log("Printing res in fetch");
      console.log(res);
      setData(res);
      // <WeatherCol/>
    } 
    catch (err) {
      console.log("Error in lat API");
      setData({});
    }
    setLoading(false);
  }

  // useEffect(()=>{
  //   fetchCity(city)
  // },[city]);

  async function fetchCity(city){
    // setValue(false);
    setLoading(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    try{
      const d = await fetch(API);
      const res = await d.json();
      console.log(res);
      setValue(true);
      setData(res);
      
    }
    catch(err){
      console.log("Error in lat API");
      setData({});
    }
    setLoading(false);
  }



  const value = {
    loading,
    setLoading,
    lat,
    setLat,
    long,
    setLong,
    data,
    setData,
    fetchLatData,
    location,
    setLoaction,
    fetchCity,
    values,
    setValue
    // currTab,
    // setCurrTab
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
