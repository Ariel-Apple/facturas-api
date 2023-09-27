const express = require('express');
const router = express.Router();
const postRouter = require('./facturas_routers');


router.use('/', postRouter)


module.exports = router