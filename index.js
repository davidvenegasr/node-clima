const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'e89338f450b86b63f22a881a69a380c1';
let city = argv.c || 'Buenos Aires';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
