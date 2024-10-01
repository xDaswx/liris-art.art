const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI; 

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
