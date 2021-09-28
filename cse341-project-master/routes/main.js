const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',ta03Controller.getProducts);
router.get('/seatch',ta03Controller.getSearchProducts);


module.exports = router;