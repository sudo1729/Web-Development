const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post('/',function(req,res){
    //console.log(req.body);
    var weight = Number(req.body.weight), height = Number(req.body.height);
    var result = weight/(height*height)
    res.send("Your BMI is : "+result);
})



app.listen(3000,function(){
    console.log("Server started at port : 3000");
})