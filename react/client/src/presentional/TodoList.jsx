import React, { Component } from 'react'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      isDone: false
    }
    this.strikeOut=this.strikeOut.bind(this);
    this.onClick=this.onClick.bind(this)
  }

onClick() {
  this.setState({
    isDone: !this.state.isDone
  })
}
  strikeOut (todo) {
    if(this.state.isDone){
      return (
        <strike>
        {todo}
        </strike>
      )
    }
    return (
      <div>{todo}</div>
    )
  }
  render () {
    
    return (
      <div>
        <li className="check-todo">
          <input type='checkbox' 
          onClick = {this.onClick}
          name='check' id='check-box' />
          {this.strikeOut(this.props.todo)}
        </li>
      </div>
    )
  }
}

export default TodoList
