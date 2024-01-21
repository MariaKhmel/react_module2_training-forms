import styled from "styled-components";

const ColorpickerBox = styled.div`
width: 400px;
  padding: 10px;
  border: 1px solid black;

`
const ColorpickerTitle = styled.h2`
line-height: 1.3;

`

const ColorPickerOption = styled.button`
display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;

  &:active{
     transform: scale(2); 
  }
`


export { ColorpickerBox, ColorpickerTitle, ColorPickerOption }