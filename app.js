const express = require("express");
const bodyparser= require("body-parser");
const request = require("request");

const app =  express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const id = "3a267299";
const key = "2beec82d419c9979ec5edde927e27d3f";



app.post("/recipe",(req,res) =>{
   var url="https://api.edamam.com/search?q=chicken&app_id="+id+"&app_key="+ key
   

request(url,function(error,response,body)
{
   console.log(body.hits[1].recipe.ingredientLines);
})
}
app.get("/",(req,res)=>
{
   res.sendFile(__dirname+"/index.html");
});

app.listen(3000,()=>
{
   console.log("Server is running at port 3000");
});



