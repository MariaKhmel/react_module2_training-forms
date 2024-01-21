import { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component{
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        license:false,
    }
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        this.props.onSubmit(this.state)

        this.reset();
    }
    handleCheckbox = e => {
     this.setState({license:e.currentTarget.checked})
    
}
    reset = () => { this.setState({name: '',tag: '',}) }

    nameInputId = nanoid();
    tagInputId = nanoid();

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name <input type="text" name="name" value={this.state.name}
                        onChange={this.handleChange} id={this.nameInputId} />
                </label>
                <label htmlFor={this.tagInputId}>
                    Tag <input type="text" name="tag" value={this.state.tag}
                        onChange={this.handleChange} id={this.tagInputId} />
                </label>
                <p>Your level </p>
                <label>
                    <input type="radio" value='junior' onChange={this.handleChange} name='experience'
                    checked={this.state.experience==='junior'}></input>Junior
                </label>
                <label>
                    <input type="radio" value='middle' onChange={this.handleChange} name='experience'
                        checked={this.state.experience === 'middle'}></input>Middle
                </label>
                <label>
                    <input type="radio" value='senior' onChange={this.handleChange} name='experience'
                        checked={this.state.experience === 'senior'}></input>Senior
                </label>
                <br/>
                <label> Agree
                    <input type="checkbox" name='license' onChange={this.handleCheckbox}
                    checked={this.state.license}
                    ></input>
                </label>
                <br />
                <button type="submit" disabled={!this.state.license}>Submit</button>
       </form>
    )
}


}

export default Form;