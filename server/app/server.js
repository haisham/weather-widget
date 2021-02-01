const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
// Import Routes directory
require('./routes')(app);

app.get('/', (req, res) => {
	res.send('PORT ' + port);
});

app.listen(port, (err) => {
	if (err) { console.log(err); };
	console.log('Listening on port ' + port);
});

module.exports = app;