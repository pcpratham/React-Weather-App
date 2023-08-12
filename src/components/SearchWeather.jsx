import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import WeatherPage from "./WeatherPage";
import { AppContext } from "../context/AppContext";
import Loading from "./Loading";
import WeatherCol from "./WeatherCol";

const SearchWeather = () => {

  const {fetchCity,loading} = useContext(AppContext);
  const [formData, setFormData] = useState({
    city: "",
  });

  const [value,setValue] = useState();

  function changeHandler(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  const submitChangeHandler = (event) => {
    console.log("Form submitted");
    console.log(formData.city);
    event.preventDefault();
    fetchCity(formData.city);
    setValue(true);
    
  }
  //   console.log(formData);
  return (
    <div className="">
      <form onSubmit={submitChangeHandler} className="flex gap-4 justify-center  ">
        <input className="text-white border:none  outline-white placeholder:text-white text-xl  w-[450px] h-[2rem] rounded-md bg-[#dbe2ef80] p-2 appearance-none  "
          type="text"
          placeholder="Search for City"
          onChange={changeHandler}
          value={formData.city}
          name="city"
        />
        <button type="submit" className="rounded-full bg-[#dbe2ef80] w-[2rem] h-[2rem] flex justify-center items-center text-xl">
          <AiOutlineSearch />
        </button>
      </form>
      <div>
        {
          loading ? (<Loading/>) : ( value ? (<WeatherCol/>) : (<div></div>))
        }
      </div>
    </div>
  );
};

export default SearchWeather;
