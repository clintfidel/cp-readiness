import React, { Component } from 'react'
import TodoList from '../presentional/TodoList'

class Todo extends Component {
  constructor (props) {
    super(props);

   const todoList = JSON.parse(localStorage.getItem('todo')) || []
    console.log(todoList)
   this.state = {
      todo: '',
      todoList: [],
      isDone: false,
      items: todoList
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderTodo = this.renderTodo.bind(this)
  }

  onChange (event) {
    const name = event.target.name,
      value = event.target.value
    this.setState({
      [name]: value
    })
  }

  onSubmit (event) {
    if(this.state.todo.trim() === ''){
      return (alert('No entry'))
    }
    event.preventDefault();
    let {items} = this.state;
      items.push(this.state.todo);
      localStorage.setItem('todo', JSON.stringify(items))
     
    this.setState({
      todo: '',
      // todoList: [...this.state.todoList, this.state.todo]
    })
   
   
  }

  renderTodo () {
    const allTodo = this.state.items
    if (allTodo === null || allTodo.length === 0) {
      return (<div className='no-todo'>
                No todo
              </div>)
    }
    return (
      <div className='items'>
        <ul className='my-items'>
          {allTodo.map((item, index) => {
           
            
             return (
               <TodoList todo={item} key={index} />
             )
           })}
        </ul>
      </div>
    )
  }

  // componentWillMount() {
  //   // this.state.todoList
  //   console.log(localStorage.getItem('')
  // }

  render () {
    return (
      <div className="my-todo">
        <section className='input-box'>
        <h1>Clint's Todo-App</h1>
          <form action='' onSubmit={this.onSubmit} method=''>
            <div className="box">
            <input
              type='text'
              onChange={this.onChange}
              value={this.state.todo}
              name='todo'
              id='text' />
            <button type='submit'>
              Add
            </button>
            </div>
          </form>
        </section>
        <div>
          <section className='todo-list'>
            <div className='todo-container'>
              <header>
                MY TODO-LIST
              </header>
              <hr />
              {this.renderTodo()}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Todo
