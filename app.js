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

app.get("/team", (req, res) => {

    /* Creating an object for each team member with JSON syntax*/
    const personData = [{
            "image": "/img/team/team-img-1.png",
            "name": "Ruth Woods",
            "position": "Founder, CEO",
            "description": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
        },
        {
            "image": "/img/team/team-img-2.png",
            "name": "Timothy Reed",
            "position": "Co-Founder, Developer",
            "description": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
        },
        {
            "image": "/img/team/team-img-3.png",
            "name": "Victoria Valdez",
            "position": "UI Designer",
            "description": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
        },
        {
            "image": "/img/team/team-img-4.png",
            "name": "Beverly Little",
            "position": "Data Scientist",
            "description": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo."
        },
    ];

    /*Converting the string into a JavaScript object*/
    const personObj = JSON.stringify(personData);

    res.send(personObj);


});

app.post("/contact", (req, res) => {
    res.send('success');
});

app.listen(3000, (req, res) => {
    console.log("Runnin'...")
});