var BlockChain = require("./chain");
var Transaction = require("./transcation");


var c = new BlockChain();
var one = new Transaction("A", "B", 100);
var two = new Transaction("C", "D", 10);
var three = new Transaction("E", "F", 60);
c.addBlock(one);
c.addBlock(two);
c.addBlock(three);

console.log("Validity: ", c.chainIsValid());
c.chain[0].data.sender = "Hacker";
console.log("Validity: ", c.chainIsValid());