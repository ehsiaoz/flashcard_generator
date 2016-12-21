var flashcard = require("./flashcard.js");


var answer = process.argv[2];

console.log("this is answer: ", answer);

var myFlashCard = new flashcard;

console.log("this is myFlashcard.clozeFlashCard(answer): ", myFlashCard.clozeFlashCard(answer));
console.log("this is myFlashcard.clozeFlashCard(answer): ", myFlashCard.clozeFlashCard(answer));

