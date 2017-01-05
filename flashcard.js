var basicFC = require('./basicF.js');
var clozeFC = require('./clozeF.js');
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
			console.log("This is cloze newFlashCard: ", newFlashCard);
		}
		else{
			newFlashCard = basicFC(arg1, arg2);
			console.log("This is basic newFlashCard: ", newFlashCard);
		}

		
		var newFile = false;
		var flashcardArray = [];
		var writeOut = null;

		fs.readFile(FILE_PATH, 'utf8', function (err, data) {
			//if file does not exist (i.e. error)
			if (err) {
				console.log("This is the readFile error: ", err);
				newFile = true;	
				console.log("This is the value of newFile: ", newFile);
			}
			console.log("This is data result: " + data);
			//if the file exists
			if(!newFile){
				//parse the data (previous flashcards) in the json file
				flashcardArray = JSON.parse(data);
				console.log("typeof flashcardArray: ", typeof(flashcardArray));
			}
			console.log("This is flashcardArray before push: ", flashcardArray);
			flashcardArray.push(newFlashCard);
			console.log("This is flashcardArray after push: ", flashcardArray);
			writeOut = JSON.stringify(flashcardArray);
			console.log("This is writeOut: ", writeOut);
			fs.writeFile(FILE_PATH, writeOut, function(err){
				if(err) {
				    return console.log(err);
				}
				console.log("The file was saved!");
			});  
		});

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
};

module.exports = flashcard;


