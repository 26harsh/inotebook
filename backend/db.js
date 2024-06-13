const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(console.log("Connect Successfully"))
    .catch( error => console.log("Error is",error))
}

module.exports = connectToMongo;