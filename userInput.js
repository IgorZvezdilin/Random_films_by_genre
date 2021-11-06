const readline = require('readline-sync');

const userInput = readline.question('What genre of films of this list do you prefer? (Choose and enter: anime, comedy, cartoon, fantasy, game, horror)' );

module.exports = userInput.trim().toLowerCase();




