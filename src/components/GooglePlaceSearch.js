import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

const GooglePlaceSearch = ({ setPlaceInfo }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_KEY);
  }, []);

  const fromAddress = async (address) => {
    try {
      const response = await Geocode.fromAddress(address);
      if (response.results.length) {
        const { lat, lng } = response.results[0].geometry.location;
        setPlaceInfo({ lat: String(lat), lon: String(lng) });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fromAddress(inputValue);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="장소 검색"
          type="text"
          value={inputValue}
          onChange={onChangeInput}
        />
        <button>검색</button>
      </form>
    </div>
  );
};

export default GooglePlaceSearch;
