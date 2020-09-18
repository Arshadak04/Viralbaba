const router = require('./index');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', router);
const port = 4000;
app.listen(port, () => console.log(`app running on ${port}`));
