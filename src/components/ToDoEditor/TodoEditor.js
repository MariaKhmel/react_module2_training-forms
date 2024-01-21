import React, { Component } from 'react';

class ToDOEditor extends Component {

    state = {
        message :'',
    }
    
    handleChange = (e) => {
        this.setState({
        message : e.currentTarget.value
    })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>


                <textarea
                 onChange={this.handleChange}
                value={this.state.message}
                >{this.state.message}</textarea>
             <button type='submit' >Save</button>   

          </form>  

         );
    }
}
 
export default ToDOEditor;