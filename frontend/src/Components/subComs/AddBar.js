import React, { Component } from 'react'

export default class AddBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newTodo: ''
        }
    }
    
    render() {
        return (
            <div>
                <form 
              className="input-group mb-2"
              onSubmit={(e)=>{ 
                e.preventDefault()
                this.props.addTodo(this.state.newTodo,this.props._id)
                this.setState({newTodo: ''})
            }}

            >
              <input
                type="text"
                className="form-control"
                placeholder="new todo..."
                value = {this.state.newTodo}
                onChange = {(e)=> this.setState({newTodo: e.target.value})}
              />
            </form>
            </div>
        )
    }
}
