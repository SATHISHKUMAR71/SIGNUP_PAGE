
const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"));
app.get("/",(req,res) => {

    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req,res) => {
    
    // res.write(req.body.firstname)
    // res.send()
    if(req.body.firstname == "SATHISH"){
        res.sendFile(__dirname + "/success.html")
    }
    else{
        res.sendFile(__dirname + "/failure.html")
    }
    
})

app.post("/failure", (req,res) => {
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("server was running............");
});