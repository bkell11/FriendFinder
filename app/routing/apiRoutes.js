var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var currentReturnObject;
        var currentLowestTotal = null;
        for (i = 0; i < friendData.length; i++) {
            let total = 0;
            for (j = 0; j < friendData[i].scores.length; j++) {

                total += Math.abs(friendData[i].scores[j] - parseInt(req.body.scores[j]));

            };
            if (total < currentLowestTotal || currentLowestTotal === null) {
                currentLowestTotal = total;
                currentReturnObject = friendData[i];
            }
        };

        friendData.push(req.body);

        res.json(currentReturnObject);

    });
};  