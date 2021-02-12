const request = require('request');

nextISSTimesForMyLocation = function (callback) {

  fetchMyIP ((error, ip) => {

    if (error) {
      return callback(error, null);

    }

    fetchCoordsByIP (ip, (error, location) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes (location, (error, passTimes) => {

        if (error) {
          return callback(error, null);

        }
        callback(error, passTimes);
      });
    });
  });
};


module.exports = { nextISSTimesForMyLocation };


//const request = require('request');


const fetchMyIP = function(callback) { 
  url = 'https://api.ipify.org?format=json'
  request(url,(error, response, body) => { 
    
    if (error) 
    return callback(error, null);
    
    if (response.statusCode !== 200) { 
     const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
     return callback(Error(msg), null);
  } 
  const ip = JSON.parse(body).ip;
  callback(null, ip);
  });
  };

  const fetchCoordsByIP = function(ip, callback) { 
    request(`https://freegeoip.app/json/${ip}`,(error, response, body) => {  
      
      if (error) 
      return callback(error, null);
      
      if (response.statusCode !== 200) { 
       const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
       return callback(Error(msg), null);
    } 
  
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
    });
    };
  
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


