var stringTogether;

var ClozeCard = function(fullText, cloze) {
    this.card = [];
    this.fullText = fullText;
    this.cloze = function() {
        if (cloze === null) {
            console.log("Error");
        } 
        else {
            return cloze;
        } 
    };
    this.partial = function() {
        var clozeSplit = this.cloze().split(" ");
        var numOfWord = clozeSplit.length;
        var fullTextSplit = this.fullText.split(" ");
    
        for (i = 0; i < clozeSplit.length; i++) {
            var findCloze = fullTextSplit.indexOf(clozeSplit[i]);
            var addDots = fullTextSplit.splice(findCloze, 1, "...");
            stringTogether = fullTextSplit.join(' ');
        }
        console.log(stringTogether); 
    };
}

module.exports = ClozeCard;




