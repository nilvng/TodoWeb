let router = require('express').Router()
const authorization = require("../middleware/authorization")
var TodosController = require("../controllers/todos")
var SubTodosController = require("../controllers/subTodos")
router.route('/')
    .get(authorization,TodosController.getTodos)
    .post(authorization,TodosController.new)

router.route('/:_id')
    .post(authorization, SubTodosController.newSub)
    .get(authorization,TodosController.view)
    .patch(authorization,TodosController.update)
    .put(authorization,TodosController.update)
    .delete(authorization,TodosController.delete)

router.route("/sub/:_id")
    .put(authorization,SubTodosController.updateSub)
    .delete(authorization,SubTodosController.deleteSub)

 module.exports = router