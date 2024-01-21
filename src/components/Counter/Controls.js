import { CounterButton } from './Counter.styled'

export const Controls = ({ onIncrement, onDecrement }) => {
    
    return (
        <div>
            <CounterButton type='button' onClick={onIncrement} >Increment</CounterButton>
            <CounterButton type='button' onClick={onDecrement}>Decrement</CounterButton>
        </div>
        
       
)

}