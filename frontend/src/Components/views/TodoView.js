import React, { Component } from "react";
import ListView from "./ListView";
import AddBar from "../subComs/AddBar";
export default class TodoView extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center"> My Todo </h3>
        <div className="container">
          <div
            className="col-md-6 offset-md-3 border"
            style={{ padding: "1rem" }}
          >
            <AddBar addTodo = {this.props.addTodo}/>
            <ListView
                todos={this.props.todos}
                editTodo = {this.props.editTodo}
                deleteTodo = {this.props.deleteTodo}
                addSubTodo={this.props.addSubTodo}
                editSubTodo={this.props.editSubTodo}
                deleteSubTodo={this.props.deleteSubTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}