var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3000, function(req, res) {
    console.log("Runnin'...")
});