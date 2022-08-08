import React from 'react'

const useCode = ({weather}) => {
    const pressure = Math.floor(weather?.main.pressure / 9.09);
  const KH = Math.round(weather?.wind.speed * 3.6);
  const Celsius = `${Math.round(weather?.main.temp - 273.15)}°C`
  const Fahrenheit = `${Math.round((weather?.main.temp-273.15) * 9/5 + 32)}°F`

  const celsiusMax = `${Math.round(weather?.main.temp_max - 273.15)}°C`
  const fahrenheitMax = `${Math.round((weather?.main.temp_max-273.15) * 9/5 + 32)}°F`
  const celsiusMin = `${Math.round(weather?.main.temp_min - 273.15)}°C`
  const fahrenheitMin = `${Math.round((weather?.main.temp_min-273.15) * 9/5 + 32)}°F`
  const Img = (weather?.weather[0].icon)
  return {
    pressure,
    KH,
    Celsius,
    Fahrenheit,
    Img,
    celsiusMax,
    fahrenheitMax,
    celsiusMin,
    fahrenheitMin
  }
}

export default useCode