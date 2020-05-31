const router = require('express').Router();

router.get('/', function (req, res) {
    res.status(200).send({
        title: "Steam Project API",
        version: "0.0.1"
    });
});

module.exports = router;