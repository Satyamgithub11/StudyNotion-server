const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }) 
    .then(() => console.log("DB is Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    })
};
