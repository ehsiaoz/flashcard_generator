var flashcard = require("./flashcard.js");


var text = process.argv[2];
var cloze = process.argv[3];


// console.log("this is text: ", text);
// console.log("this is cloze: ", cloze);

var card1 = new flashcard;

console.log("this is card1.clozeFlashCard partial text: ", card1.clozeFlashCard(text, cloze).ptext()); 
console.log("this is card1.basicFlashCard cloze: ", card1.clozeFlashCard(text, cloze).cloze);
console.log("this is card1.basicFlashCard full text: ", card1.clozeFlashCard(text, cloze).ftext());


