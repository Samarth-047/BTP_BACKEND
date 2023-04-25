var express = require("express");
var router = express.Router();
const User = require("../models/Users");

// post request to add new user
router.post("/add", (req, res) => {
    // console.log(req.body);
    const newUser = new User({
        text: req.body.text,
        video_url: req.body.video_url,
        audio_url: req.body.audio_url
    });
    newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

// post request to add new user
router.post("/addText", (req, res) => {
    // console.log(req.body);
    let text=req.body.textArray;
    // post every entry of text array to user model
    text.forEach(function(entry) {
        const newUser = new User({
            text: entry,
            video_url: "",
            audio_url: ""
        });
        newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    });
});

// get a random text entry from database where video_url is empty and send text to frontend
router.get("/getText", (req, res) => {
    User.find({video_url: ""})
        .then(user => {
            // console.log(user);
            let randomIndex = Math.floor(Math.random() * user.length);
            // console.log(user[randomIndex].text);
            res.json(user[randomIndex].text);
        })
        .catch(err => console.log(err));
});

    


module.exports = router;

