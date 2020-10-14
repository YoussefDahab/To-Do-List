import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) =>(
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
      /*todo is passed into TodoItem as a property. When we map through something, a list is created and the list has keys */
    ));
  }
}

//Property types - are a validation for properties that a component should have. We can set type to required or not
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
/* we want to load a whole new component called todo item. todo is passed into TodoItem as a property 
*/
