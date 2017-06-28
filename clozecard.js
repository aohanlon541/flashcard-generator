var ClozeCard = function(fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = function() {
        var clozeSplit = this.cloze.split(" ");
        var numOfWord = clozeSplit.length;
        var fullTextSplit = this.fullText.split(" ");
    
        for (i = 0; i < clozeSplit.length; i++) {
            var findCloze = fullTextSplit.indexOf(clozeSplit[i]);
            var addDots = fullTextSplit.splice(findCloze, 1, "...");
            var stringTogether = fullTextSplit.join(' ');

            console.log(stringTogether);
        }
        
    };
}

var exampleCard = new ClozeCard("George Washington was the first president of the USA", "George Washington");
if (process.argv[2] === "test") {
    exampleCard.partial();
}
// module.exports = ClozeCard;




