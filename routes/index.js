const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.index);
router.post('/addItem', itemController.addItem);

module.exports = router;
