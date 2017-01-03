var basicFC = require('./basicF.js');
var clozeFC = require('./clozeF.js');
var fs = require('fs');


var flashcard = function(){

	this.basicFlashCard = function(question, answer) {

		var newBasicFlashCard = new basicFC(question, answer);

		
		return newBasicFlashCard;
		
	}

	this.clozeFlashCard = function(text, cloze) {

		var newClozeFlashCard = new clozeFC(text, cloze);

		return newClozeFlashCard;
			// var Txt = "\nFlashCards: " + newUserSearch.name + " Location: " + newUserSearch.location + 
	  //                 " Date: " + newUserSearch.date;

	  //   	fs.appendFile("log.txt", Txt);
		
	}

}

module.exports = flashcard;
