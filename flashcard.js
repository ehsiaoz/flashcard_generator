var basicFC = require('./basicFC.js');
var clozeFC = require('./clozeFC.js');
var fs = require('fs');

var flashcard = {
	//method for creating a new flashcard
	createFC: function(arg1, arg2){
		const FILE_PATH = './flashcards.json';
		var newFlashCard = null;
		// input validation - return error if not
		if(arg1 === null || arg2 === null || arg1 === undefined || arg2 === undefined){
			console.log("ERROR: invalid inputs. Please provide 2 arguments");
			return null;
		}
		
		// logic to determine whether basic or cloze
		if(arg1.indexOf('[]') > -1){
			newFlashCard = clozeFC(arg1, arg2);
		}
		else{
			newFlashCard = basicFC(arg1, arg2);
		}

		var log = JSON.stringify(newFlashCard) + ", "

		fs.appendFile(FILE_PATH, log, function(err){
			  if(err) {
			        return console.log(err);
			    }

			    console.log("The file was saved!");
			})

		// check for errors
		if(newFlashCard.error){
			console.log(newFlashCard.error);
			return null;
		}
		// return the flashcard object
		return newFlashCard;
	},
	//method to return front of flashcard
	getFrontText: function(fc){
		return fc.data.front;
	},
	//method to return back of flashcard
	getBackText: function(fc){
		return fc.data.back;
	},
	//method to return the full answer
	getFullText: function(fc){
		return fc.data.ftext;
	},
	getFCList: function(){
		fs.readFile(FILE_PATH, 'utf8', function (err, data) {
		  if (err) throw err;
		  console.log(JSON.parse(data));
		});
	} 
};

module.exports = flashcard;


