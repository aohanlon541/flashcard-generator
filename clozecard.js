var inquirer = require("inquirer");
var stringTogether;

var ClozeCard = function(fullText, cloze) {
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
        return stringTogether; 
    };
}


var cardArr = [];
var card;
var num;

var getNumberOfCards = function(answer) {
    inquirer.prompt([
        {
            name: "num",
            message: "How many cards would you like to make? "
        }
        ]).then(function(answer) {
            num = answer.num;
            createCard()
        });
};

var createCard = function(answer) {
    if (cardArr.length < num) {
        console.log("\nNEW CARD\nThis card will omit the cloze");
        inquirer.prompt([
        {
            name: "fullText",
            message: "Put the whole statement here: "
        }, {
           name: "cloze",
           message: "Cloze (part of statement that'll be omitted): " 
        }  
        ]).then(function(answers) {
            card = new ClozeCard(answers.fullText, answers.cloze);
            cardArr.push(card);
            createCard();
        }); 
    }
    else {
        for (i = 0; i < cardArr.length; i++) {
            console.log(cardArr[i].partial());
        } 
    }   
};
getNumberOfCards();

module.exports = ClozeCard;




