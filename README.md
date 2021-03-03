# Search-Weather

도시 검색으로 날씨 정보를 보여주는 웹사이트입니다.
![](/search-weather.png)
<a>https://hdw0903.github.io/search-weather/</a>

---

## Development

> npm start

## 제작 포인트

도시를 검색하여 날씨 정보를 받아볼 수 있게 제작하였습니다.

1. Google Map Geocoding API를 기반으로 한 react-geocode API를 사용하여 도시명 검색으로 위, 경도 값을 받아왔습니다.

2. 받아온 위, 경도 값을 open-weather API로 전달하면서 해당 값의 날씨 정보를 보여줍니다.

3. 웹 호스팅은 Github 무료 호스팅 서비스인 gh-pages를 사용했습니다.

4. API KEY 값들은 .env 로 gitignore 처리 후 git secrets에 따로 저장해 줬습니다.

## 에러 사항

언제부터인가 구글 API 호출 시 요청은 제대로 되는데 응답이 안 오는 문제가 발생했습니다.

알고 보니 구글 무료 API 정책이 바뀌면서 구글 Maps API 사용 시에도 결제 계정을 추가하여 프로젝트에 결제 권한을 추가해 줘야 무료 API를 사용할 수 있게 된 것이었습니다.

그에 따라 구글 계정에 결제 계정을 만들고 내 프로젝트에서 만든 결제 계정을 사용할 수 있게 권한을 부여해 줬습니다...
