import React, { useContext } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import YourWeather from "./components/YourWeather";
import SearchWeather from "./components/SearchWeather";
import WeatherPage from "./components/WeatherPage";
import GrantPage from "./components/GrantPage";
import { useState } from "react";
import { AppContext } from "./context/AppContext";
import Loading from "./components/Loading";
import WeatherCol from "./components/WeatherCol";
const App = () => {
  // const [cityName,setCityName] = useState();
  // const city_name = (data) =>{
  //   console.log("App.js");
  //   console.log(data)
  //   setCityName(data);
  // }
  const { loading, location, values } = useContext(AppContext);
  return (
    <div className="bg-[#254B78] h-screen mt-0 text-white ">
      <div className="flex flex-col flex-wrap items-center gap-7 justify-center w-full pt-10">
        <div className="my-2">
          <h1 className="text-5xl">WEATHER APP</h1>
        </div>
        {/* <div>
          
          <SearchWeather />
        </div>

        <div>
          {values ? loading ? <Loading /> : <WeatherCol /> : <div><p>Enter Value of City</p></div>}
        </div> */}

        <div className="flex justify-between flex-wrap gap-10 w-[40%]">
          <NavLink to={"/"}>
            <p className="text-xl p-2  border-none rounded-md border-grey-300">
              Your Weather
            </p>
          </NavLink>
          <NavLink to={"/searchweather"}>
            {" "}
            <p className="text-xl p-2  border-none rounded-md border-grey-300">
              Search Weather
            </p>
          </NavLink>
        </div>
        {/* <div>
          <WeatherCol/>
        </div> */}
        <Routes>
          <Route path={"/"} element={<YourWeather />}></Route>
          <Route path={"/searchweather"} element={<SearchWeather />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
