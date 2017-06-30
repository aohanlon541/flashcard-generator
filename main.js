var Basic = require("./basiccard.js");
var Cloze = require("./clozecard.js");

var inquirer = require("inquirer");

var getTypeOfCard = function(answer) {
    inquirer.prompt([
        {
            type: 'list',
            name: "type",
            message: "What type of card would you like to make?",
            choices: ["Basic (front and back)", "Cloze (phrase completion)"]
        }
        ]).then(function(answer) {
            if (answer.list === "Basic (front and back)") {
                getNumberOfCards();
            }
            else {
                getNumberOfCardsCloze();
            }
        });
};

getTypeOfCard();
