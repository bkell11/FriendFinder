var friendData = require("../data/friendData");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        //    need to code in best match math here.


        // if (tableData.length < 5) {
        //     tableData.push(req.body);
        //     res.json(true);
        // }
        // else {
        //     waitListData.push(req.body);
        //     res.json(false);
        // }
    });
};  