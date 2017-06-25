var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;
}

module.exports = ClozeCard;


var clozeSplit = cloze.split(" ");
var numOfWord = clozeSplit.length;

var textSplit = text.split(" ");
var indexOfCloze = textSplit(clozeSplit)

var partial = textSplit.splice