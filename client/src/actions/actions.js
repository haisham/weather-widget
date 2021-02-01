import fetch from 'isomorphic-fetch';
import { API_URL } from '../constants/settings';

import {
	FETCH_WEATHER_REQUEST,
	FETCH_WEATHER_SUCCESS,
	FETCH_WEATHER_FAILED
} from '../constants/actionTypes';

export function weatherRequest() {
	return {
		type: FETCH_WEATHER_REQUEST
	}
}

export function weatherSuccess(json) {
	return {
		type: FETCH_WEATHER_SUCCESS,
		payload: {
			json,
			receivedAt: Date.now()
		}
	}
}

export function requestWeatherFailed(error) {
	return {
		type: FETCH_WEATHER_FAILED,
		error
	};
}

export function fetchWeatherRequest(city) {
	const url = API_URL;
	return function (dispatch) {
		dispatch(weatherRequest());
		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': '*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 'city': city, 'units': 'metric' })
		})
			.then(response => response.json())
			.then(json => {
				if (json.data.cod === "200") {
					dispatch(weatherSuccess(json))
				} else {
					dispatch(requestWeatherFailed(json.data.message));
				}
			})
			.catch(error => {
				console.log(error);
				dispatch(requestWeatherFailed(error.toString()))
			});
	};
}

