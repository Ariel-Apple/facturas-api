const { Router } = require('express');
const router = Router();
const { FacturaPost } = require('../controllers/FacturaPost')
const { AllPostFactura } = require('../controllers/AllPostFactura')
const { DetailsFactura } = require('../controllers/DetailsFactura');







router.post('/factura', FacturaPost);
router.get('/factura', AllPostFactura)

router.get('/factura/:idFacturas', DetailsFactura)






module.exports = router