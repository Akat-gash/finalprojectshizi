const mongoose = require('mongoose');
require("dotenv").config();


const dbString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ll7sr.mongodb.net/myFirstdatabaseCon?retryWrites=true&w=majority`;
mongoose.connect(dbString,(err)=>{
    if(!err){
        console.log('databaseCon Connected Successfully');
    }else{
        console.log('databaseCon Failed to connect');
    }
});

module.exports = mongoose;

