var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/angular_first_project');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Person = mongoose.model('person', new Schema({name: String}));

app.get("/people", function(req, res) {
    Person.find({}, function(err, data) {
        if(err) {
            console.log("error:", err);
        } else {
            res.send(data);
        }
    });
});

app.post("/people", function(req, res) {
    var person = new Person({name: req.body.name});
    person.save(function(err, data) {
        if(err) {
            console.log("error:", err);
        } else {
            res.send(data);
        }
    });
});

app.get("/*", function(req, res) {
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function() {
    console.log("Server running: " + app.get("port"));
});