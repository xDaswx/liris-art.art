const express = require('express');
const router = express.Router();
const drawingsController = require('./controllers/drawsController');
const drawingValidations = require('./validators/drawingValidations');
const authenticateJWT = require('./middlewares/authenticateJWT');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const JWT_SECRET = process.env.JWT_SECRET 

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === process.env.USERNAME  && password === process.env.PASSWORD ) {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '48h' });
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

router.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});

router.get('/login', function(req,res){
    res.sendFile(__dirname + '/views/login-geren.html');
});

router.get('/gerenciamento', authenticateJWT, function(req,res){
    res.sendFile(__dirname + '/views/desenhos-admin.html');
});

router.get('/drawings', drawingsController.getAllDrawings);

router.get('/canvas_pixels', drawingsController.gatin);


router.post('/drawings/add', authenticateJWT, drawingValidations.addDrawing, drawingsController.addDrawing);

router.put('/drawings/:id', authenticateJWT, drawingValidations.editDrawing, drawingsController.editDrawing);

router.delete('/drawings/:id', authenticateJWT, drawingValidations.deleteDrawing, drawingsController.deleteDrawing);


router.get('/ping', drawingsController.ping);

module.exports = router;
