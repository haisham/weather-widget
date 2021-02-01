const url = require('url');
const config = require('../config/config');

module.exports = {
    weatherQuery: function (city, units) {
        const weatherApiUrl = config.weatherApiUrl;
        const apiKey = config.apiKey;
        const queryConfig = config.query.name;

        const apiURL = new URL(weatherApiUrl);
        apiURL.searchParams.append("apiKey", apiKey);

        if (city) {
            apiURL.searchParams.append(queryConfig, city);
        }
        if (units) {
            apiURL.searchParams.append("units", units);
        }

        return apiURL.href;
    }
};