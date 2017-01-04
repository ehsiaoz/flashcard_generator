var flashcard = require("./flashcard.js");


var text = process.argv[2];
var cloze = process.argv[3];


// console.log("this is text: ", text);
// console.log("this is cloze: ", cloze);

var card1 = flashcard.createFC(text,cloze);
if(card1){
  console.log("this is front text: ", flashcard.getFrontText(card1));
  console.log("this is back text: ", flashcard.getBackText(card1));
  console.log("this is full text: ", flashcard.getFullText(card1));
}
