const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(mainRoutes);
app.use(userRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(5000);