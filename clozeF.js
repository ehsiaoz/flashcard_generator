//create cloze flashcard constructor
var clozeFC = function (text, cloze){
	var fcObject = {
					type: 'cloze',
					data: {
						front: text.replace(/\[[^\]]*?\]/g, '______'),
						back: cloze,
						ftext: text.replace(/\[[^\]]*?\]/g, cloze)
					}
				};
	// perform input validation here - return null incase of failure
	var regExp = /\[[^\]]*?\]/g;
	if (regExp.exec(text) === null) {
		console.log("ERROR: clozeFC inputs are invalid. Make sure to include [] in the text argument");
		return {
			error: "ERROR: clozeFC inputs are invalid. Make sure to include [] in the text argument"
		};
	}

	console.log(fcObject);
	return fcObject;
}

module.exports = clozeFC;