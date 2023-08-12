// import React from "react";
// import { useEffect, useState } from "react";

// const WeatherPage = (props) => {
//   const city = props.city;
//   console.log(city);
//   console.log("WeatherPAge");
//   // console.log(props.city);

//   const [loading, setLoading] = useState();
//   const [data, setData] = useState({});
//   const API_key = "91b8f26991bba04064a266b66b817296";

//   async function fetchCityWeather(city) {
//     const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
//     setLoading(true);
//     try {
//       const data = await fetch(API_CITY);
//       const res = await data.json();
//       //   <WeatherPage res={res} />;
//       setData(res);
//     //   console.log(data);
//     } catch {
//       console.log("error in api loading");
//     }
//     setLoading(false);
//   }
//   useEffect(() => {
//     fetchCityWeather(city);
//   }, []);

//     console.log(data);
//   return (
//     <div>
//       <div>{/* {data.main.temp} */}</div>
//     </div>
//   );
// };

// export default WeatherPage;
