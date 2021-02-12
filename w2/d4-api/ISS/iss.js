
const request = require('request');
url = 'https://api.ipify.org?format=json'

const fetchMyIP = function(callback) { 
request(url,(error, response, body) => {  // use request to fetch IP address from JSON API
  // error can be set if invalid domain, user is offline, etc.
  if (error) 
  return callback(error, null);
  
  if (response.statusCode !== 200) { //The response.statusCode indicates the HTTP response code, and we should check it for a 200.
   const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
   return callback(Error(msg), null);
} //creates a new Error object that we can pass around. 
//In this case, we pass it back to the callback to indicate that something went wrong.
const ip = JSON.parse(body).ip;
callback(null, ip);
});
};


module.exports = { fetchMyIP };