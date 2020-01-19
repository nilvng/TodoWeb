Todos = require('../models/todos')

errorHandler = () => res.json({
    status: 'fail',
    msg: err
})

exports.getTodos = function (req,res){
    Todos.find({username: req.user},(err, todos)=>{
        if (err) errorHandler()
        else{
            res.json({
                msg: 'todo retrieved successfully',
                data: todos
            })
        }
    })
}

exports.new = function (req,res) {
    var todo = new Todos()
    todo.username = req.user
    todo.title = req.body.title
    try{
        todo.save()
        res.json({
            msg: 'new Todo added',
            data: todo
        })
    }catch (err) {res.send({msg: 'fail'})}
}

exports.view = function (req,res){
    Todos.findById({_id:req.params._id}, (err, todo)=>{
        if (err) res.send(err)
        res.json({
            msg: 'Todo loading...',
            data: todo
        })
    })
}

exports.update = function (req,res){
    Todos.findById({_id:req.params._id}, (err,todo)=>{
        todo.title = req.body.title
        todo.completed = req.body.completed? req.body.completed: false
        todo.save((err,todo)=>{
            if (err) res.send(err)
            res.json({
                msg: 'todo updated',
                data: todo
            })
        })

    })
}

exports.delete = function (req,res){
    Todos.deleteOne({_id: req.params._id}, (err,todo)=>{
        if (err) res.send(err)
        res.json({
            msg: "Todo deleted"
        })
    })
}

