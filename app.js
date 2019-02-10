var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/contact", (req, res) => {
    var name = req.body.name;
    var email = req.body.emailAddress;
    var message = req.body.message;

    console.log(name + " " + email + " " + message);
    res.render("contact", { name: name, email: email, message: message });
});

app.listen(3000, (req, res) => {
    console.log("Runnin'...")
});