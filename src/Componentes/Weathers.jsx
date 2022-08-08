import axios from "axios";
import React, { useEffect, useState } from "react";
import useCode from "../hooks/useCode";
import useTemp from "../hooks/useTemp";
import Loading from "./Loading";
import "./Css/Styles.css";
const Weathers = ({ lat, lon }) => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState();
  const { temp, Clim } = useTemp();
  const {
    pressure,
    KH,
    Celsius,
    Fahrenheit,
    Img,
    celsiusMax,
    fahrenheitMax,
    celsiusMin,
    fahrenheitMin,
  } = useCode({ weather });
  useEffect(() => {
    setLoading(true);
    if (lat) {
      const apiKey = "3c48ef753d3cf04ca1d7714126ea06e0";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [lat, lon]);

  console.log(weather);
  if (false) {
    <Loading />;
  } else {
    return (
      <div className="App">
        <div className="App_full">
         <div className="App_subCenter">
           <h1>Wheather App</h1>
           <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
           <img src={`http://openweathermap.org/img/wn/${Img}@4x.png`} alt="" />
           <h1>{`${temp ? Celsius : Fahrenheit}`}</h1>
         </div>

          <li>
            <a>
              <b>Description: </b>
              {`${weather?.weather[0].description} `}
            </a>
          </li>
          <li>
            <a>
              <b>Speed: </b>
              {`${KH} km/h -----${weather?.wind.speed} m/s`}
            </a>
          </li>
          <li>
            <a>
              <b>Humidity: </b>
              {`${weather?.main.humidity} %`}
            </a>
          </li>
          <li>
            <a>
              <b>Presssure: </b>
              {`${weather?.main.pressure} hPa / ${pressure} mb`}
            </a>
          </li>
          <li>
            <a>
              <b>Temperature Max:</b> {`${temp ? celsiusMax : fahrenheitMax}`}
            </a>
          </li>
          <li>
            <a>
              <b>Temperature Min:</b> {`${temp ? celsiusMin : fahrenheitMin}`}
            </a>
          </li>
          <div className='fatherButton'>
            <button onClick={Clim} >
              Click here for {temp ? "Fahrenheit" : "Celsius"}{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Weathers;
