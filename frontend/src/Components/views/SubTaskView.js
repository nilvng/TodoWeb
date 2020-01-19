import React, { Component } from 'react'
import TodoItem from '../subComs/TodoItem'
export default class SubTaskView extends Component {
    render() {
        return (
            <div className = 'card'>
            <div className = 'card-body'>
                    <TodoItem
                    todo={this.props.todo} 
                    editTodo = {this.props.editTodo}
                    deleteTodo = {this.props.deleteTodo}
                    />
            </div>
        </div>
        )
    }
}
