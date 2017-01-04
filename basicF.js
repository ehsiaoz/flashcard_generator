//create basic flashcard constructor
var basicFC = function (question, answer) {
	var fcObject = {
					type: 'basic',
					data: {
						front: question,
						back: answer,
						ftext: question + " " + answer
					}
				};
	// perform input validation here
	if(question === null || answer === null){
		console.log("ERROR: basicFC inputs are invalid.");
		return {
			error: "ERROR: basicFC inputs are invalid."
		};
	}

	// else if valid, return a basic Flashcard object
	return fcObject;
}

module.exports = basicFC;