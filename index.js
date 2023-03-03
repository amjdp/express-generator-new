const express = require('express');

const config = require('./src/config');

const app = express();

// app.get("/", (req,res)=>{
//     res.status(200).json({"message":"hello"});
// });

// app.use(`${config.api.prefix}`,logMiddlewre.logRequest, route);

app.use(`${config.api.prefix}`,()=>{
    console.log("hello");
});

// api/prefix - log when api hits - middleware - actual route
// config - diff environments - diff urls

module.exports = app;


