let mongoose = require("mongoose");
var subTodoSchema = mongoose.Schema({
    // sub_id: ObjectId(),
  title: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false,
  }
});
var todoSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  subTasks: [subTodoSchema]
});

var Todos = (module.exports = mongoose.model("todo", todoSchema));

// module.exports.get = function(cb, limit) {
//   Todos.find(cb).limit(limit);
// };
