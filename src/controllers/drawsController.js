const express = require('express')
const drawingsModel = require('../models/drawingsModel')

const getAllDrawings = async (req,res) => {
    const drawings = await drawingsModel.getAllDrawings()
    if (drawings.error) {
        return res.status(500).send(drawings)
    }
    return res.status(200).send(drawings[0])
}

const ping = async (req,res) => {
    
    return res.status(200).send({message:'pong'})
}


module.exports = {
    getAllDrawings,
    ping
}