const db = require('./dbconnection')

const getAllDrawings = async () => {
    try{
        const result = await db.execute('SELECT * FROM drawings')
        return result
    }
    catch (err){
        return {message:'Internal Error', error: err.message}
    }
}



module.exports = {
    getAllDrawings,
}