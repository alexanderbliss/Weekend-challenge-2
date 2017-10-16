var express = require('express');
var router = express.Router();

router.post('/serverMath', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
    clientData = req.body;
    // history.push(req.body);
    // // result = mathOperator(req.body);
    // console.log(history);


})
router.get('/result', function (req, res) {
    res.send(doMath())
});
router.get('/history', function (req, res) {
    res.send(getHistory())
})

module.exports= router;