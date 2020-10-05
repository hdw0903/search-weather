# Search-Weather

도시 검색으로 날씨 정보를 보여주는 웹사이트입니다.

---

## 제작 포인트

1. Google Map Geocoding API를 기반으로한 react-geocode API를 사용하여 도시명 검색으로 위,경도 값을 받아왔습니다.

2. 받아온 위,경도 값을 open-weather API로 전달하면서 해당 값의 날씨 정보를 보여줍니다.

3. 웹 호스팅은 Github 무료 호스팅 서비스인 gh-pages를 사용했습니다.

4. API KEY 값들은 .env 로 gitignore 처리 후 git secrets에 따로 저장해 줬습니다.
