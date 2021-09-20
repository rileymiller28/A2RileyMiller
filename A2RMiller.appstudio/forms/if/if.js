/*
//prompt user info
let firstName = prompt('What is your first name?');
let state = prompt('What is your state\'s abbreviation?');
let temp = Number(prompt('What is the temperture in Fahrenheit?'));

//create messages as array
let recomendation = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.' ,
'wear your warmest coat, a warm hat, a scarf, and warm gloves.' , 'wear a warm coat, hat and gloves. Maybe a scarf too'];

//use if/else statements to provide output
if (state == 'FL' && temp >= 50 && temp <= 70){
  console.log(`${firstName} ${recomendation[4]}`)}
  else if (state == 'FL' && temp >= 32 && temp <= 50){
    console.log(`${firstName} ${recomendation[3]}`)}
  else if (state == 'NE' && temp >= 32 && temp <= 50){
    console.log(`${firstName} ${recomendation[2]}`)}
  else if (state == 'NE' && temp <= 32){
    console.log(`${firstName} ${recomendation[1]}`)} ;
*/