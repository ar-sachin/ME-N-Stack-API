var mongoose=require('mongoose');
var mongoosePaginate=require('mongoose-paginate');

var ToDoSchema=new mongoose.Schema({
    title:String,
    description:String,
    dueDate:Date,
    status:Boolean
});

ToDoSchema.plugin(mongoosePaginate);

const ToDo=mongoose.model('Todo',ToDoSchema);

module.exports=ToDo;