import React, { Component } from 'react';
import initialTodos from '.././todos.json';
import {ToDoList} from './ToDoList/ToDoList'
import Form from './ToDoList/Form'
import ToDOEditor from './ToDoEditor/TodoEditor';
import {Filter} from './Filter'
import { nanoid } from 'nanoid';
export class App extends Component {

  state = {
    todos: initialTodos,
  filter :'',
  }
  

  deleteTodo = (index) => (
    this.setState(prevState => ({
     todos:prevState.todos.filter(todo=>todo.id !== index)
    } ))
  )
  
  handleToggleCheckbox = (index) => (
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === index) {
          return {
            ...todo,
            completed: !todo.completed,
        }
        }
        
        return todo;
    }) 
   }))
  )
  
  formSubmitHandler = (data) => {
  console.log(data)
}
  addTodo = text => {
   const newToDo =    {
      id: nanoid(), 
      text,
completed:false}
    this.setState(prevState => ({

      todos: [...prevState.todos, newToDo]
   
    }))
  }
  

  handleFilterChange = e => {
   this.setState({filter : e.currentTarget.value})
  }

  getVisibleToDos = () => {
  
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.todos.filter(todo => 
      todo.text.toLowerCase().includes(normalizedFilter)
      )
  }
  
  

  render() {
const visibleToDos = this.getVisibleToDos();
    const { todos } = this.state;
    const completedToDos = todos.reduce((total, todo)=>(todo.completed ? total +1 : total), 0)
  
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ToDOEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />

        <div>
          <p> Total amount :{todos.length} </p>
          <p> Completed : {completedToDos}</p>
        </div>
        <ToDoList todos={visibleToDos} deleteTodo={this.deleteTodo} handleToggleCheckbox={this.handleToggleCheckbox} />

      </>
    )
}

}