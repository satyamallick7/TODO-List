const express = require("express");
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine", "ejs")




todoList = []

app.get("/", (req, res)=>{

    let today = date.getDate()
    res.render("list.ejs", {today:today, todoList:todoList})
    
})
app.post("/", (req,res)=>{
    const listItem = req.body.itemName
    todoList.push(listItem)
    res.redirect("/")

})




app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})