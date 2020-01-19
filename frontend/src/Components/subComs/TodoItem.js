import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
let strike = "";
export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  render() {
    let todo = this.props.todo;
    strike = todo.completed === true ? "line-through" : "";
    return (
      <div
        className="form-check py-3"
        onMouseEnter={() => this.setState({ isFocused: true })}
        onMouseLeave={() => this.setState({ isFocused: false })}
      >
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={todo.completed}
          value={todo.title}
          onChange={() =>
            this.props.editTodo(todo._id, todo.title, !todo.completed)
          }
        />
        <div>
          <span
            className="form-check-label"
            style={{ textDecoration: strike }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e =>
              this.props.editTodo(todo._id, e.target.innerText, todo.completed)
            }
          >
            {todo.title}
          </span>
          {this.state.isFocused && (
            <span className="float-right">
              <AiOutlineClose
                onClick={() => this.props.deleteTodo(todo._id)}
                style={{ cursor: "pointer" }}
              />
            </span>
          )}
        </div>
      </div>
    );
  }
}
