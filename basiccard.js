var inquirer = require("inquirer");

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    this.addCard = function() {   
    }
}

var cardArr = [];

var createCard = function(answer) {
    if (cardArr.length < 1) {
        console.log("\nNEW CARD\n");
        inquirer.prompt([
        {
            name: "front",
            message: "Front of Card: "
        }, {
           name: "back",
           message: "Back of Card: " 
        }  
        ]).then(function(answers) {
            var card = new BasicCard(answers.front, answers.back);
            cardArr.push(card);
            createCard();
        }); 
    }
    else { 
        if (process.argv[2] === "front") {
            console.log(card.front);
        }
        if (process.argv[2] === "back") {
            console.log(card.back);
        }
    }    
};
createCard();

module.exports = BasicCard;