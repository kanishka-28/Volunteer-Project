const mongoose = require("mongoose");
// require("dotenv").config();
const mongoURL = "mongodb+srv://sudhir:sudhir@dbcluster.fr4o0.mongodb.net/database?retryWrites=true&w=majority";
// const mongoURL = "mongodb+srv://bunny:bunny_KAT_25@lolcluster.2rmyh.mongodb.net/lol?retryWrites=true&w=majority";

// const mongoURL = process.env.mongo_URL

const connectToMongo = async()=>{
    mongoose.connect(mongoURL,  () => {
        console.log('connection with mongoDb established');
    })
}

module.exports = connectToMongo;