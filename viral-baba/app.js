const express = require('express');
const app=express();
const path = require('path');

const postsRoutes=require('./routes/postRoutes')

const publicDirectortPath=path.join(__dirname,'./public/src');

app.use(express.static(publicDirectortPath));

app.use(postsRoutes);

module.exports=app;