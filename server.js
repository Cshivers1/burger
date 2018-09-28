const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
