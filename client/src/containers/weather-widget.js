import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherRequest } from '../actions/actions';
import { createBrowserHistory } from 'history';
import * as qs from 'query-string';
 

class WeatherWidget extends Component {

	constructor(props) {
		super(props);
		this.state = ({
			error: '',
			city: '',
			temp: '',
			humidity: '',
			windSpeed: '',
			windDirection: ''
		});

	}

	handleSubmit = (event) => {
		event.preventDefault();
		var city = event.target.city.value;
		const { dispatch } = this.props;
		dispatch(fetchWeatherRequest(city));
		const history = createBrowserHistory();
		history.push('/?city=' + city);
	}

	static getDerivedStateFromProps(props) {

		let weatherInfo = props.weather.weather;
		return {
			error: weatherInfo.error,
			city: weatherInfo.cityName,
			temp: weatherInfo.temp,
			humidity: weatherInfo.humidity,
			windSpeed: weatherInfo.windSpeed,
			windDirection: weatherInfo.windDirection,
		}
	}

	componentDidMount() {
		const query = qs.parse(location.search);
		const city = query.city;
		const { dispatch } = this.props;
		dispatch(fetchWeatherRequest( city ? city : 'Copenhagen' ));
	}

	render() {
		return (
			<div>
				<div className="widget" style={{ margin: '10px', width: '300px' }}>
					<div className="panel panel-info">

						<div className="panel-heading">Weather in <b>{this.state.city}</b></div>
						<ul className="list-group">
							<li className="list-group-item">Temperature: <b>{this.state.temp}°C</b></li>
							<li className="list-group-item">Humidity: <b>{this.state.humidity}</b></li>
							<li className="list-group-item">Wind: <b>{this.state.windSpeed} m/s {this.state.windDirection}</b></li>
							<li className="list-group-item">
								<form onSubmit={this.handleSubmit} className="form-inline">
									<div className="form-group">
										<input type="text" className="form-control" name="city" id="city" placeholder="City" />
									</div>
									<button type="submit" className="btn btn-default" style={{ marginLeft: '4px' }}>Search</button>
								</form>
							</li>
						</ul>
					</div>
					{this.state.error &&
						<div className="alert alert-danger">
							{this.state.error}
						</div>
					}
				</div>
			</div>
		)

	}
}

function mapStateToProps(state) {
	return {
		weather: state.weather,
		city: state.city
	}
}

export default connect(mapStateToProps)(WeatherWidget)
