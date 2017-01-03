

//create cloze flashcard constructor
var clozeFC = function (text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.regExp = /\[[^\]]*?\]/g;
	this.result = this.regExp.exec(this.text);
	this.ptext = function(){
			
					if (this.result === null) {

						return "Error: Make sure to include [] in text argument";
					} 
					
					else {
						var ptext = this.text.replace(/\[[^\]]*?\]/g, '______');
						return ptext;	
					}		
				}

	this.ftext = function(){

					if (this.result === null) {

						return "Error: Make sure to include [] in text argument";
					} 
					else {
						var ftext = this.text.replace(/\[[^\]]*?\]/g, this.cloze);
						return ftext;
					}
				}

}

// var clozeFC = function (answer){
// 	this.answer = answer;
// 	this.cloze = function(){
// 					var regExp = /\[([^)]+)\]/;
// 					var cloze = regExp.exec(this.answer);
// 					return cloze[1];
// 				}
// 	this.text = function(){
// 					var text = this.answer.replace(/\[[^\]]*?\]/g, '______');
// 					return text;
// 				}
// }
//test
// var card1 = new clozeFC("[Blue] is my color");
// console.log(card1.cloze());

module.exports = clozeFC;