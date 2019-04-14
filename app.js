var express = require("express");
var bodyParser = require("body-parser");
var Transaction = require("./transaction");
var BlockChain = require("./chain");

var app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname+"/public"));

var chain = new BlockChain();


app.get('/blocks', (req, res) => {
    res.send(chain);
    res.end();
})

app.post('/blocks', (req, res) => {
    // var name = req.body.name;
    // var message = req.body.message;
    var sender = req.body.sender;
    var receiver = req.body.receiver;
    var amount = req.body.amount;

    let trans = new Transaction(sender, receiver, amount);
    chain.addBlock(trans);
    console.log(chain.getLength());

    // const queryString = "INSERT INTO messages (name, message) VALUES ('"+name+"', '"+message+"')"
    // connection.query(queryString, (err, results, fields) => {
    //     if (err) {
    //         console.log("Failed to insert new user");
    //         console.log(err);
    //         res.sendStatus(500);
    //         return
    //     } 
    //     io.emit("message", req.body);
    //     res.sendStatus(200);
    // })
    res.sendStatus(200);
})

var server = app.listen(3020, () => {
    console.log("Server is running on port", server.address().port);
});