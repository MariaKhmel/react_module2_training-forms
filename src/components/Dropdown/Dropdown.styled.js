import styled from "styled-components"

const DropdownBox = styled.div`
    position: relative;
    width: 400px;
    padding: 20px;
    border: 1px solid black;

`
const DropdownMenu = styled.div`
position: absolute;
  top: 100%;
  left: 0;
  width: 400px;
  padding: 20px;
  text-align: center;
  background-color: teal;
  color: white;

`


export { DropdownBox, DropdownMenu }
