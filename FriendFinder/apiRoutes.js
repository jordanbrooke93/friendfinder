var path = require("path")

var friends = require("../friends.js")

app.get("/api/friends", function(req, res) {
    res.json(friends)
})

app.post("/api/friends", function(req, res) {
    
})