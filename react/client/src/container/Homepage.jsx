import React, { Component } from 'react'
import Todo from '../container/Todo'


class Homepage extends Component {
  
  render () {
    return (
      <div>
        <div className=' container'>
          <Todo />
         
        </div>
      </div>
    )
  }
}

export default Homepage
