
const fetch = require('node-fetch');
const weatherQuery = require('../../helpers/weatherQuery').weatherQuery;

module.exports = (app) => {

    app.post('/weather', (req, res) => {
        const requestBody = req.body;
        const weatherQueryUrl = weatherQuery(requestBody.city, requestBody.units);
        fetch(weatherQueryUrl)
            .then(res => res.json())
            .then(data => {
                res.status(200).send({
                    data
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: err
                });
            });
    });
};