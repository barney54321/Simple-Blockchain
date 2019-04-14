var express = require("express");
var bodyParser = require("body-parser");
var Transaction = require("./transcation");
var BlockChain = require("./chain");

var app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname+"/public"));

var chain = new BlockChain();


app.get('/blocks', (req, res) => {
    // const connection = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "password",
    //     database: "messages_database"
    // })

    // const queryString = 'SELECT * FROM messages'
    // connection.query(queryString, (err, rows, fields) => {
    //     if (err) {
    //         console.log(err.errno);
    //         res.sendStatus(500);
    //         return
    //     } 
    //     var messages = new Array();
    //     var s = 0;
    //     for (var i = 0; i < rows.length; i++) {
    //         messages[i] = {
    //             name: rows[i].name,
    //             message: rows[i].message
    //         };
    //     }
    //     var m = {
    //         mes: messages
    //     }
    //     res.send(m);
    // })
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