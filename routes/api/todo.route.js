var express = require('express');
var router = express.Router();

var TodoController = require('../../controllers/todo.controller');

router.get('/', TodoController.getToDos);
router.post('/', TodoController.createToDo);

module.exports = router;