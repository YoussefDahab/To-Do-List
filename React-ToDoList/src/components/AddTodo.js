// class based component - type rce then hit tab
/*1. When we have an input field, usually you would want to have your fields as a piece of state for that component. 
2. As you type in the input field, an onChange event will be fired off and you need to update the state. If I type hello in the input field, then the title in the 
state should be updated to hello. Therefore, the input field has a value of this.state.title and an onChange event*/

import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // Its going to try to submit to the actual file. We can stop that by e.preventDefault()
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }
    //event handlers take in event parameter e - e.target.value returns whatever we type in the input field
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                {/*e.target.name is title because name="title" */}
                <input type="text" name="title" placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange} style={{ flex: '10', padding: '5px' }} />
                <input type="submit" value="Submit" className="btn"  style={{flex: '1'}} />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
