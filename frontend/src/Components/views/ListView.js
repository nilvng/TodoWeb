import React, { Component } from "react";
import TaskView from "./TaskView";
import SubTaskView from "./SubTaskView";
import AddBar from "../subComs/AddBar";
import {MdExpandMore} from "react-icons/md"
export default class ListView extends Component {
  render() {
    return this.props.todos.map(todo => (
      <div>
        <div className="d-flex">
          <span style={{ flexGrow: 3 }} key={todo._id}>
            <TaskView
              key={todo._id}
              todo={todo}
              editTodo={this.props.editTodo}
              deleteTodo={this.props.deleteTodo}
            />
          </span>
          <button
            className="btn btn-outline-info"
            type="button"
            data-toggle="collapse"
            data-target={"#subTaskCollapse" + todo._id}
            aria-expanded="false"
            aria-controls={"subTaskCollapse"+ todo._id}
          >
            <MdExpandMore/>
          </button>
        </div>
        <div className="collapse p-4" id={"subTaskCollapse"+ todo._id}>
          <AddBar addTodo = {this.props.addSubTodo} _id = {todo._id}/>
          {todo.subTasks.map(subTodo => (
              <SubTaskView
                key={subTodo._id}
                todo={subTodo}
                editTodo={this.props.editSubTodo}
                deleteTodo={this.props.deleteSubTodo}
              />
          ))}
        </div>
      </div>
    ));
  }
}
