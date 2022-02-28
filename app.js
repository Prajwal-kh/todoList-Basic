/* GET requests are meant to fetch data from specified resources and POST requests are meant to submit data
to a specified resource. The Express framework provides a router() method to create HTTP endpoints.*/

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

//let newTask =""; //wil replace last list item <li>
// In JS we can push item into array even if its declared as const but we cannot update/ assign values to array if it is const
const newTasks = [];
const workTasks = [];

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('view engine', 'ejs'); //set view engine to ejs

app.get("/", function(req, res) {
  const day = date.marathiDate();
  //Everytime we render list provide/give all variables used inside list.ejs file inside render method
  res.render("list", { typeList: day, kindOfTasks: newTasks }); //ejs file name & set ejs marker variable key to a value.
  //res.sendFile(__dirname+"/index.html");  //response from server
});

app.post("/", function(req, res) {
  const newTask = req.body.todoListItem;
  if (req.body.addButton === "Work") {
    workTasks.push(newTask);
    res.redirect("/work");
  }
  newTasks.push(newTask);
  res.redirect("/"); //will redirect to app.get()
  //res.sendFile(__dirname+"/index.html");
});

app.get("/work", function(req, res) {
  res.render("list", {
    typeList: "Work TodoList",
    kindOfTasks: workTasks
  });
});

app.post("/work", function(req, res) {
  const newWorkTask = req.body.todoListItem;
  workTasks.push(newWorkTask);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function() {
  console.log("Connected to server");
});
