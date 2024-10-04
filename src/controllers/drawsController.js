const { validationResult } = require('express-validator');
const drawingsModel = require('../models/drawingsModel');

const getAllDrawings = async (req, res) => {
    try {
        const drawings = await drawingsModel.find();
        return res.status(200).send(drawings);
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error', error: err.message });
    }
};

const gatin = async (req, res) => {
    try {
        return res.status(200).send([
            {
              _id: '6123abc123',
              x: 1500,
              x_type: 'random',
              y: 650,
              size: 175,
              speed: 1.4,
              direction: 'left',
              frameIndex: 0,
              framesPerRow: 4,
              frameRate: 11,
              frameCount: 4,
              spriteWidth: 500,
              spriteHeight: 500,
              facingRight: false,
              image: 'resources/imgs/gato-ay.png',
              username: 'Ayaka',
            }
          ]);
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error', error: err.message });
    }
};

const addDrawing = async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }

    try {
        const { title, url, date } = req.body; 
        const newDrawing = new drawingsModel({ title, url, date });
        await newDrawing.save(); 
        return res.status(201).send(newDrawing); 
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error', error: err.message });
    }
};

const editDrawing = async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }

    try {
        const { id ,title, url, date } = req.body;

        const updatedDrawing = await drawingsModel.findByIdAndUpdate(
            id,
            { title, url, date },
            { new: true, runValidators: true } 
        );

        if (!updatedDrawing) {
            return res.status(404).send({ message: 'Drawing not found' });
        }

        return res.status(200).send(updatedDrawing); 
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error', error: err.message });
    }
};

const deleteDrawing = async (req, res) => {
    try {
        const { id } = req.params; 
        const deletedDrawing = await drawingsModel.findByIdAndDelete(id); 

        if (!deletedDrawing) {
            return res.status(404).send({ message: 'Drawing not found' });
        }

        return res.status(204).send();
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error', error: err.message });
    }
};

const ping = async (req, res) => {
    return res.status(200).send({ message: 'pong' });
};

module.exports = {
    getAllDrawings,
    addDrawing,
    editDrawing,
    deleteDrawing,
    ping,
    gatin
};
