//need to make a website for hussainFitness to display the company
//also need to build a workout plan builder which will take some work
//use api ninjas for workout api and database of workouts
//https://api-ninjas.com/api/exercises this is the api link
//https://api.api-ninjas.com/v1/exercises?muscle= then you add any mscle you want
//
//then ask user for prefrences 
//set up how many days a week 
//let user select from exercises and add to the list then add to a calender

//sample code for exercises api for node js
const request = require('request');
var muscle = 'biceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});