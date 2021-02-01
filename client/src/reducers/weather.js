import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED
} from '../constants/actionTypes';


const initialState = {
  weather
}

export default function weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        weather: {
          error: '',
          cityName: action.payload.json.data.city.name,
          temp: Math.round(action.payload.json.data.list[0].main.temp),
          humidity: action.payload.json.data.list[0].main.humidity,
          windSpeed: action.payload.json.data.list[0].wind.speed,
          windDirection: toTextualDescription(action.payload.json.data.list[0].wind.deg),
        }
      })
    case FETCH_WEATHER_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        weather: {
          error: action.error,
          cityName: '',
          temp: '',
          humidity: '',
          windSpeed: '',
          windDirection: '',
        }
      })
    default:
      return state
  }
}

function toTextualDescription(degree) {
  //TODO use i18n
  var sectors = ['Nordlig', 'Nordøst', 'Øst', 'Sydøst', 'Sydlig', 'Sydvestlig', 'Vestlig', 'Nordvestlig'];
  degree += 22.5;

  if (degree < 0)
    degree = 360 - Math.abs(degree) % 360;
  else
    degree = degree % 360;

  var which = parseInt(degree / 45);
  return sectors[which];
}
