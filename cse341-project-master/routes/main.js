const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('main page');
    res.sendFile(path.join(rootDir,'views','main.html'));

});

module.exports = router;