const route= require('./index');
const express = require('express');
const app =express();
// const path= require('path');

app.use(route);
// app.use('index.html',express.static(__dirname+'public/images'));
//  app.use(express.static(path.join(__dirname, 'public')));
 app.use('public/uploads',express.static('public/uploads'));
// console.log(t);
const port=4000;
app.listen(port, ()=>console.log(`app running on ${port}`));
