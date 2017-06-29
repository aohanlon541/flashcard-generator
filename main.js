var Basic = require("./basiccard.js");
var Cloze = require("./clozecard.js");

var htmlCard = new Basic("What is HTML?", "HyperText Markup Language");
var cssCard = new Cloze("CSS means Cascading Style Sheet", "Style");


if (process.argv[2] === "create-basic-card") {
    
}