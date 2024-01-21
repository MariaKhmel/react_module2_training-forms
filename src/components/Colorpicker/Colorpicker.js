import { Component } from "react";
import { ColorpickerBox, ColorpickerTitle, ColorPickerOption } from './Colorpicker.styled'

export class Colorpicker extends Component {

    state = {
        activeOptionIdx: 0,
    }

    setActiveIndex = (index) => {
        this.setState({ activeOptionIdx :index})
    }

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionIdx]
        console.log(options)
        return (
            <ColorpickerBox>
                <ColorpickerTitle> Color Picker</ColorpickerTitle>
                <p>
                    Chosen color: {label}
                </p>
                 <div>
                {options.map(({label, color}, index) =>(
                    <ColorPickerOption type="button"
                        key={label}
                        style={{ backgroundColor: color }}
                        onClick={()=>this.setActiveIndex(index)}
                    ></ColorPickerOption>   
                ))   }

                </div>
            </ColorpickerBox>

        ) 

    }
}