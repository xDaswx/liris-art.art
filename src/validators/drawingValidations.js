const { body, param } = require('express-validator');

const drawingValidations = {
    addDrawing: [
        body('title')
            .isString().withMessage('Title must be a string')
            .notEmpty().withMessage('Title is required'),
        body('url')
            .isString().withMessage('URL must be a valid URL')
            .notEmpty().withMessage('URL is required'),
        body('date')
            .isString().withMessage('Date must be a string')
            .notEmpty().withMessage('Date is required')
    ],

    editDrawing: [
        param('id')
            .isString().withMessage('Invalid ID format'),
        body('title')
            .isString().optional().withMessage('Title must be a string'),
        body('url')
            .isString().optional().withMessage('URL must be a valid URL'),
        body('date')
            .isString().optional().withMessage('Date must be a string')
    ],

    deleteDrawing: [
        param('id')
            .isString().withMessage('Invalid ID format')
    ]
};

module.exports = drawingValidations;
