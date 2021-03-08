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
// All users in a list
var users = [];
app.use(cors());
// Configuring body parser middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.post('/user', function (req, res) {
    // We will be coding here
});
app.listen(port, function () { return console.log("listening on port " + port + "!"); });
