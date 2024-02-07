const express = require('express')
const drawsController = require('./controllers/drawsController')
const router = express.Router();

// router.get('/config', drawsController.getAllDrawings)
router.get('/drawings', drawsController.getAllDrawings)

module.exports = router