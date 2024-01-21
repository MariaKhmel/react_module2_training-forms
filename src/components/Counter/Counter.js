import React, { Component } from 'react';
import { CounterBox } from './Counter.styled';
import { Value } from './Value';
import { Controls } from './Controls';

export class Counter extends Component{

    static defaultProps = {
        initialValue: 0,
        
}
    state = {
        value: this.props.initialValue,

    }

    handleIncrement = () => {
        this.setState(prevValue => ({
            value: prevValue.value + 1,
        }))
    }
    
    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
    }

    render() {
        return (
            <CounterBox>
                <Value value={this.state.value} /> 
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </CounterBox>
           
        )
    }

}