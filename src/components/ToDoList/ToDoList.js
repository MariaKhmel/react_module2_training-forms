import { Component } from "react";

import { TotalToDoList, ToDoItem, ToDoText } from "./ToDoList.styled";

export const ToDoList = ({ todos, deleteTodo, handleToggleCheckbox }) => (
<TotalToDoList>
        {todos.map(({ id, text }) => (
            <ToDoItem key={id}>
                <input type="checkbox"
                    onChange={() => handleToggleCheckbox(id)}
                ></input>
                <ToDoText>{text}</ToDoText>    
                <button type="button"
                onClick={()=>deleteTodo(id)}
                >Delete</button>
      </ToDoItem>
  )) }     

</TotalToDoList>


)