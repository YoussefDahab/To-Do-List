import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    
    render() {
        //Destructuring allows us to pull variables out of lists. Instead of doing this.props.todo.id now I just say id. Same with title
        const { id, title } = this.props.todo;
        return (
            <div style = { this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {/*To make the checkbox do something we add the event OnChange.*/}
                    { title }
                    {/*We add an event to this button so when we click it, the TodoItem is deleted*/}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',    //5px top and bottom while 10px left and right
    borderRadius: '50%',      // rounded button
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem




/* 1. We can use inline style (using double curly braces {{}}. It is identical to CSS but we do camel case instead of hyphens: backgroundColor not background-color 
<div style = {{ backgroundColor: '#f4f4f4'}} ) 
in JSX which allows us to have our markup, functionality, and styling all right in our component

2. we can also use a variable.
const itemStyle = {
    backgroundColor: '#f4f4f4'
}
then <div style = { itemStyle }>

3. style can also be put inside of a function because we want the style to change depending on if the todo has been completed or not
*/
