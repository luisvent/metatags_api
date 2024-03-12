var express = require('express');
const router = express.Router();
const webController = require('../controllers/web_controller');

router.get('/', webController.metadata);

module.exports = router;
