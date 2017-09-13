var express = require("express");
var hbs= require("hbs");

hbs.registerPartials(__dirname +"/views/partials");
hbs.registerHelper("cDate", ()=>{
    var time= new Date().getFullYear();
    return time;
});
var app= express();


app.set("view enginge", "hbs");
app.use (function(req, res, next){
    console.log("lololol");
    next();
    console.log(next);
});
app.use(express.static( __dirname+"/public"));

app.get("/", function(req, res){
    res.render("home.hbs", {name:"Abdul rehman"});
});


app.get("/projectsxxx", function(req, res){
    res.render("project.hbs");
});



app.listen(2000);