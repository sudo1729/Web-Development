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
    const firstName = req.body.firstName;
    const lastName = req.body.lastname;
    const email = req.body.email;
    console.log(firstName);

    var data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);
    const url = "https://us1.api.mailchimp.com/3.0/lists/bd8fdd653c"
    
    const options={
        method:"POST",
        auth:"sudo:604cf258c168587e0662a56d30c60a4b-us1",
        update_existing:true
   
    }
    
    const request = https.request(url,options,function(response){
        if(response.statusCode===200){
            res.send("Successfully subscribed")
        }
        else{
            res.send("Not success");
        }
            
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})




app.listen(3000,function(){
    console.log("server is running at port 3000");
});






//604cf258c168587e0662a56d30c60a4b-us1
//bd8fdd653c