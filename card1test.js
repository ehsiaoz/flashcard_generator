var flashcard = require("./flashcard.js");


var text = process.argv[2];
var cloze = process.argv[3];


// console.log("this is text: ", text);
// console.log("this is cloze: ", cloze);

var card1 = flashcard.createFC(text,cloze);