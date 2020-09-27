import React, { useState } from 'react';
import OpenWeather from 'react-open-weather-widget';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import './App.css';
import GooglePlaceSearch from './components/GooglePlaceSearch';

function App() {
  const [placeInfo, setPlaceInfo] = useState(undefined);
  return (
    <>
      <GooglePlaceSearch setPlaceInfo={setPlaceInfo} />
      {placeInfo && (
        <OpenWeather
          forecast="5days"
          apikey={process.env.REACT_APP_OPEN_WEATHER_KEY}
          lang="ko"
          type="geo"
          lat={placeInfo.lat}
          lon={placeInfo.lon}
        />
      )}
    </>
  );
}

export default App;
