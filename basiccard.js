var fs = require('fs');  
var inquirer = require("inquirer");
var cardArr = [];
var card;
var num;

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    this.getNumberOfCards = function(answer) {
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
    this.createCard = function(answer) {
        if (cardArr.length < num) {
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
                card = new BasicCard(answers.front, answers.back);
                cardArr.push(card);
                createCard();
            }); 
        }
        else {
            for (i = 0; i < cardArr.length; i++) {
                console.log(cardArr[i].front);
                console.log(cardArr[i].back);
            } 
        }   
    };         
}



module.exports = BasicCard;
