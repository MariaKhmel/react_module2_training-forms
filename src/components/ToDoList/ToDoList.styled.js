import styled from "styled-components";

const TotalToDoList = styled.ul`

 width: 600px;
`
const ToDoItem = styled.li`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
`

const ToDoText = styled.p`
 margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;

`
export { TotalToDoList, ToDoItem, ToDoText }