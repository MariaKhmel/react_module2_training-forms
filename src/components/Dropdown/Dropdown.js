import { Component } from 'react';
import { DropdownBox, DropdownMenu } from './Dropdown.styled';

export class Dropdown extends Component{

state = {
    visible: false,
}

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }
render() {

    return (
            <DropdownBox>
            <button type='button' onClick={this.toggle}>
                {this.state.visible ? 'Hide': 'Show'}
            </button>
            {this.state.visible && <DropdownMenu>Dropdown Window</DropdownMenu>}
                </DropdownBox>
      
       
)


}
}