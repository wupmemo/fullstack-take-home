"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var cors = require('cors');
var port = 8080;
var MongoClient = require('mongodb').MongoClient;
var connectionString = 'mongodb+srv://regov:rKa7H7GU@BXL83z@itsos.33kdd.mongodb.net/regov?retryWrites=true&w=majority';
var db_name = 'regov';
//TODO: should be handled in separate file something like "util"
//TODO: passwords should be only shared in .env files
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://regov:rKa7H7GU@BXL83z@itsos.33kdd.mongodb.net/regov?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// All users in a list added manualy for now.
var users = [
    {
        "_id": "60462560c811233e22cbfsdb",
        "index": 0,
        "documentID": "http://placehold.it/128x128",
        "firstName": "Memo",
        "secondName": "someone",
        "email": "123me@example.com",
    },
    {
        "_id": "60462560c811233e22cbf7db",
        "index": 1,
        "documentID": "http://placehold.it/128x128",
        "firstName": "Dude",
        "secondName": "man",
        "email": "123you@example.com",
    },
    {
        "_id": "60462560c811233e22cb27db",
        "index": 2,
        "documentID": "http://placehold.it/128x128",
        "firstName": "sheela",
        "secondName": "girl",
        "email": "123us@example.com",
    },
];
app.use(cors());
// Configuring body parser middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.post('/user', function (req, res) {
    /**
     * grab data from request object
     * add data to the empty list of users defined above
     * open connection to DB and insert data
     * give response in JSON format to show if process is successful or not
     */
    res.send("starting to create user");
    users.push(req.body);
    console.log(users);
});
app.listen(port, function () { return console.log("listening on port " + port + "!"); });
