const jwt = require('jsonwebtoken');
require('dotenv').config()


const JWT_SECRET = process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; 

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({message: 'autenticação falhou'});
            }
            req.user = user;
            next();
        });
    } else {
        return res.redirect('/login');
        //res.sendStatus(401);
    }
};

module.exports = authenticateJWT;
