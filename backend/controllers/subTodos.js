const Todos = require("../models/todos");

exports.newSub = function(req, res) {
  Todos.updateOne(
    { _id: req.params._id },
    { $push: { subTasks: req.body } },
    (err, result) => {
      if (err) res.send(err);
      res.send({
        msg: "SubTodo added",
        data: req.body
      });
    }
  );
};

exports.updateSub = function(req, res) {
  Todos.findOne({ "subTasks._id": req.params._id })
    .then(todo => {
      const sub = todo.subTasks.id(req.params._id);
      sub.set(req.body);
      return todo.save();
    })
    .then(todo => {
      res.send({ todo });
    })
    .catch(e => res.status(400).send(e));
};
exports.deleteSub = function(req, res) {
  Todos.updateOne(
    { "subTasks._id": req.params._id },
    {
      $pull: { subTasks: { "_id": req.params._id } }
    }, function (err,todo){
        if (err) res.send(err)
        else res.send({msg: "sub deleted!"})
    }
  );
};
