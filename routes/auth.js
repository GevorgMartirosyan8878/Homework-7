const express = require('express');
const controller = require('../controllers/methods');
const bodyParser = require('body-parser').json();
const router = express.Router();

router.get('/', controller.getUsers)

router.get('/:id', controller.getCurrentUser)

router.post('/', bodyParser, controller.addNewUser)

router.put('/:id', bodyParser, controller.changeCurrentUser)

router.delete('/:id', bodyParser, controller.deleteCurrentUser)

module.exports = router;