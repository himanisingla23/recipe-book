const express = require("express");
const bodyparser= require("body-parser");
const request = require("request");

const app =  express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const id = "";
const key = "";



app.post("/recipe",(req,res) =>{
   
   let query = req.body.query;

   var url="https://api.edamam.com/search?q="+query+"&app_id="+id+"&app_key="+ key  ;
   request(url,function(error,response ,body)
   {
      let obj = JSON.parse(body);
      let result =obj.hits[0].recipe.ingredientLines
      res.send("<p>"+result+"</p>");

   
   
   });


});


   
app.get("/",(req,res)=>
{
   res.sendFile(__dirname+"/index.html");
});

app.listen(3000,()=>
{
   console.log("Server is running at port 3000");
});


