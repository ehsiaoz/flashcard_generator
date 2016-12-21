var basic = require('./basicF.js');
var cloze = require('./clozeF.js');
var fs = require('fs');


var flashcard = function(){

	this.clozeFlashCard = function(answer) {

		var newClozeFlashCard = new cloze(answer);

		// return newClozeFlashCard.cloze();
		return newClozeFlashCard.text();
			// var Txt = "\nFlashCards: " + newUserSearch.name + " Location: " + newUserSearch.location + 
	  //                 " Date: " + newUserSearch.date;

	  //   	fs.appendFile("log.txt", Txt);
		
	}

}

module.exports = flashcard;
