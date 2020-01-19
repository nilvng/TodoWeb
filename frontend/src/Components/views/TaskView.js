import React, { Component } from 'react'
import TodoItem from '../subComs/TodoItem'

export default class TaskView extends Component {
    render() {
        return (
            // <div className = 'accordion'>
                <div className = 'card'>
                    <div className = 'card-header'>
                            <TodoItem
                            todo={this.props.todo} 
                            editTodo = {this.props.editTodo}
                            deleteTodo = {this.props.deleteTodo}
                            />
                    </div>
                </div>
            // </div>
        )
    }
}
