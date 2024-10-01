const express = require('express');
const drawingsModel = require('../models/drawingsModel');

const getAllDrawings = async (req, res) => {
    try {
        const drawings = await drawingsModel.find();
        return res.status(200).send(drawings);
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error', error: err.message });
    }
};

const ping = async (req, res) => {
    return res.status(200).send({ message: 'pong' });
};

module.exports = {
    getAllDrawings,
    ping,
};
