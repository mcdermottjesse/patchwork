const request = require('request');

const fetchISSFlyOverTimes = function (coords, callback) {

  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {

    if (error)
      return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching the ISS pass times. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const pass = JSON.parse(body).response;
    callback(null, pass);
  });
};

module.exports = { fetchISSFlyOverTimes };