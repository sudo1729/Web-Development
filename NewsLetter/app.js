//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");

})


app.post("/",function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastname;
    var email = req.body.email;
    console.log(firstName);
})




app.listen(3000,function(){
    console.log("server is running at port 3000");
});