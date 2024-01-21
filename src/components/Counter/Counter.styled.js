import styled from "styled-components"


const CounterBox = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;
`

const CounterValue = styled.span`
margin-right: 15px;
  margin-left: 15px;
  font-size: 64px;
  font-family: monospace;
  
`


const CounterButton = styled.button`
 border: none;
  padding: 10px 15px;
  background-color: teal;
  color: #fff;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;


  &:active{
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
`

export { CounterBox, CounterValue, CounterButton }