var ToDo = require('../models/todo.model');

_this = this;

exports.getTodos = async function (query, page, limit) {

    var options = {
        page,
        limit
    };

    try {

        var todos = await ToDo.paginate(query, options);

        return todos;

    } catch (error) {
        console.log(error.message);
        throw error('Error while fetching records!');
    }

};


exports.createTodo = async function (todo) {

    var newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    });

    try {

        var savedToDo = newTodo.save();
        return savedToDo;

    } catch (error) {
        throw Error("Error while Creating Todo")
    }
};