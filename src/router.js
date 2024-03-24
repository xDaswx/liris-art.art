const express = require('express')
const drawsController = require('./controllers/drawsController')
const router = express.Router();

// router.get('/config', drawsController.getAllDrawings)


router.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});

router.get('/ping', drawsController.ping)
router.get('/drawings', drawsController.getAllDrawings)

module.exports = router