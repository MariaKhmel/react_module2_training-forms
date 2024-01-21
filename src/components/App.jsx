import React, { Component } from 'react';
import { Counter } from './Counter/Counter';
import {Dropdown} from './Dropdown/Dropdown'
import { Colorpicker } from './Colorpicker/Colorpicker';
import initialTodos from '.././todos.json';
import {ToDoList} from './ToDoList/ToDoList'


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];


export class App extends Component {

  state = {
  todos: initialTodos,
}
  deleteTodo = (index) => (
    this.setState(prevState => ({
     todos:prevState.todos.filter(todo=>todo.id !== index)
    }
   
  ))
)
  
  render() {

    const { todos } = this.state;

    const completedToDos = todos.reduce((total, todo)=>(todo.completed ? total +1 : total), 0)
 
    return (
      <>
        <Counter initialValue={0} />
        <Dropdown />
        <Colorpicker options={colorPickerOptions} />
        <div>
          <p> Total amount :{todos.length} </p>
          <p> Completed : {completedToDos}</p>
        </div>
        <ToDoList todos={todos} deleteTodo={this.deleteTodo} />

      </>
    )
}

}