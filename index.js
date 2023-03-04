const express = require('express');

const config = require('./src/config');

const app = express();

// app.get("/", (req,res)=>{
//     res.status(200).json({"message":"hello"});
// });

// app.use(`${config.api.prefix}`,logMiddlewre.logRequest, route);
console.log(config.api.prefix);

app.get(`/${config.api.prefix}`,(req,res)=>{
    console.log("hello");
    res.status(400).json({message:"hello"});
});

// app.use(`${config.api.prefix}`,(req,res)=>{
//     responseHelper(res, { statusCode: 404, message: "Route not found", data: [], error: []});
// });

// api/prefix - log when api hits - middleware - actual route
// config - diff environments - diff urls

module.exports = app;


