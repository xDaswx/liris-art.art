const mongoose = require('mongoose');

const drawingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    date: { type: String, required: true },
});

const Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;