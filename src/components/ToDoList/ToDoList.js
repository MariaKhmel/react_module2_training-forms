import { Component } from "react";

import { TotalToDoList, ToDoItem, ToDoText } from "./ToDoList.styled";

export const ToDoList = ({ todos, deleteTodo }) => (
<TotalToDoList>
        {todos.map(({ id, text }) => (
            <ToDoItem key={id}>
                <ToDoText>{text}</ToDoText>    
                <button type="button"
                onClick={()=>deleteTodo(id)}
                >Delete</button>
      </ToDoItem>
  )) }     

</TotalToDoList>


)