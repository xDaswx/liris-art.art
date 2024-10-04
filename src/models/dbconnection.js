const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI; 
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true }, useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000};


const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, clientOptions );
        console.log('MongoDB conectado com sucesso!');
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Coleções:', collections);
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1); 
    }
};


module.exports = connectDB;
