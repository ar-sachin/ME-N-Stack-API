var TodoService = require('../services/todo.service');

_this = this;

exports.getToDos = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        
        var todos = await TodoService.getTodos({},parseInt(page), parseInt(limit));

        return res.status(200).json({ status: 200, data: todos, message: "ToDo's received successfully!" });

    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }

};

exports.createToDo = async function (req, res, next) {
    var todo = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try {

        var createdToDo = await TodoService.createTodo(todo);
        return res.status(201).json({ status: 201, data: createdToDo, message: "To Do Created Successfully!" });

    } catch (error) {
        return res.status(400).json({ status: 400, message: "Error creating to-do" });
    }
};