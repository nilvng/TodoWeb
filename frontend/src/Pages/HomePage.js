import React, { Component } from "react";
import Axios from "axios";
import TodoView from "../Components/views/TodoView";
// let todoURL = "http://localhost:5000/todos"
let todoURL = "/todos";
// let userURL = "http://localhost:5000/users"
export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }
  fetchData = () => {
    Axios.get(todoURL, {
      headers: { 'authToken': this.props.authToken }
    }).then(res => this.setState({ todos: res.data.data }));
  };
  componentDidMount() {
    this.fetchData();
  }
  addTodo = todo => {
    Axios.post(
      todoURL,
      { title: todo },{
      headers: { 'authToken': this.props.authToken }
      }).then(() => this.fetchData());
  };
  editTodo = (_id, title, completed) => {
    Axios.patch(
      `${todoURL}/${_id}`,
      { title, completed },{
        headers: { 'authToken': this.props.authToken }
        }).then(() => this.fetchData());
  };
  deleteTodo = _id => {
    Axios.delete(`${todoURL}/${_id}`,{
      headers: { 'authToken': this.props.authToken }
      }).then(() => this.fetchData());
  };

  addSubTodo = (todo,_id) => {
    Axios.post(
      `${todoURL}/${_id}`,
      { title: todo },{
      headers: { 'authToken': this.props.authToken }
      }).then(() => this.fetchData());
  };
  editSubTodo = (_id, title, completed) => {
    console.log(_id, title)
    Axios.put(
      `${todoURL}/sub/${_id}`,
      { title, completed },{
        headers: { 'authToken': this.props.authToken }
        }).then(() => this.fetchData());
  };
  deleteSubTodo = _id => {
    console.log(_id)
    Axios.delete(`${todoURL}/sub/${_id}`,{
      headers: { 'authToken': this.props.authToken }
      }).then(() => this.fetchData());
  };

  render() {
    return (
      <div>
        <TodoView
          todos={this.state.todos}
          addTodo={this.addTodo}
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
          addSubTodo={this.addSubTodo}
          editSubTodo={this.editSubTodo}
          deleteSubTodo={this.deleteSubTodo}
        />
      </div>
    );
  }
}
