import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import './GooglePlaceSearch.css';

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
    if (setPlaceInfo !== undefined) {
      setPlaceInfo(undefined);
    }
    fromAddress(inputValue);
    setInputValue('');
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="background container">
        <p>원하는 도시를 검색해 날씨를 확인해보세요!</p>
        <form className="search-form" onSubmit={onSubmit} autoComplete="on">
          <input
            placeholder="장소를 입력해 주세요"
            type="text"
            autoFocus
            value={inputValue}
            onChange={onChangeInput}
          />
          <button>검색</button>
        </form>
      </div>
    </>
  );
};

export default GooglePlaceSearch;
