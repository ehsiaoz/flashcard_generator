

//create cloze flashcard constructor
var clozeFC = function (answer){
	this.answer = answer;
	this.cloze = function(){
					var regExp = /\[([^)]+)\]/;
					var cloze = regExp.exec(this.answer);
					return cloze[1];
				}
	this.text = function(){
					var text = this.answer.replace(/\[[^\]]*?\]/g, '______');
					return text;
				}
}

//test
// var card1 = new clozeFC("[Blue] is my color");
// console.log(card1.cloze());

module.exports = clozeFC;