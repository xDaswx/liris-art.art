const express = require('express')
const drawingsModel = require('../models/drawingsModel')

const getAllDrawings = async (req,res) => {
    const drawings = await drawingsModel.getAllDrawings()
    return res.status(200).send(drawings[0])
}

module.exports = {
    getAllDrawings,
}