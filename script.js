

const films = require('./objFilms.js');
const userInput = require('./userInput.js');

const randomchoice = (arr) => (arr[Math.floor(Math.random()*arr.length)]);

const randomFilm = () => {
    for(let genre in films) {
        if (userInput == genre) return console.log(randomchoice(films[genre]));        
    }
return console.log('You make a mistacke, please try agan');
};

randomFilm();
