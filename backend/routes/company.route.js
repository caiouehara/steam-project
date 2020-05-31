const router = require('express').Router();
const controller = require('../controllers/company.controller')

router.get('/', controller.get)
router.post('/add', controller.post)

module.exports = router;