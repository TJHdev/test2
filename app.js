"use strict";

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

var arrayOne    = [0,1,2,3,4];
var arrayTwo    = [1,2,3];
var arrayThree  = [2,3,4];
var arrayFour   = [3,4,5];

function welcomeToVSCode(index){
    console.log(index + " " + helloWorld());
}

console.log(arrayThree);

function helloWorld(){
    return "hello world!";
}

arrayOne.forEach(welcomeToVSCode);


arrayTwo.forEach(welcomeToVSCode);

app.get("/", function(req, res)
{
    res.sendFile(__dirname+"/index.html");
});

app.get("/hello", function(req,res)
{
    res.send("Hello World!");
});

app.listen(3000, function()
{
    console.log("Example app listening on port 3000!");
});