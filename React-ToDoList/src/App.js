import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
//import axios from 'axios';
//import {v4 as uuid} from 'uuid';

// this file is the main component app. this is a class based component
class App extends Component {

  /*to create a react component type rce then hit tab
  to create a functional component type rfc then hit tab (Header.js)
  1. Different components can have their own state but alot of times you are going to need a state that multiple components can access. Our todo items need to be 
  in a place where we can feed it down to different components. We will have all of our todos in the main app component state. To access state, we say
  this.state.todos or this.state.todos[1].title*/
  /*2. Take the todos in the main app component state and pass them to the Todos component as a property (line 85). The way to add props is just like HTML attributes.
  Now we can access todos (todo items) from within our Todos component since we passed them to it as a property using this.props.todos or this.props.todos[2].id */
  /*3. Loop through todos in Todos.js and output title. Use the JS high order array method map. It returns an array from an input array
  4. Todos has a property called todos. In Todos.js we need to declare that property as a prop type and also import PropTypes
  5. TodoItems has a property called todo. In TodoItem.js we need to declare that property as a prop type and also import PropTypes
  6. Header is a functional component because it has no state, just markup
  7. AddTodo component
  8. Implement react browser router for about.js  - import it here first
  9. To use the router, wrap everything in browser router tags which we used in alias of Router. So <Router></Router>
  10.I want the AddTodo and Todos component to be displayed on the same page while the about component will be displayed on a different page with a path(URL) of /about
  so we put each of them separately in a Route tag
  11. If we go to /about page everything in / is also shown. They are all on the same page. The fix for this is to add 'exact' in the first route
  12. Lets add links to be able to go to both pages. We do that in Header.js. So we have to import the links in Header.js However we don't use the <a> tag for links
  as in HTML
  13. google json placeholder : https://jsonplaceholder.typicode.com/ It allows us to have a backend to work with. We will make a request to this URL to get all of 
  the todos instead of having them hardcoded in a list. To make requests, we could use the fetch API (regular JS). We can also use Axios (npm install axios) 
  which is an http library. We want to fetch the todos from the json placeholder API instead of having them hardcoded
  14. To make an initial request, we use another lifecycle method called componentDidMount() which will run right after the component mounts
  15. If we add a todo, we want to make a post request (which is used to add something) to the REST API because right now we are just adding into the UI. We want 
  to make the request to the json placeholder and take the response and put it in the todo list. It doesn't get saved to their server but it completes the request. It 
  mimics a real life backend
  16. Steps 13 to 15 haven't been done yet*/

  state = {
    todos: [/*
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }*/
    ]
  }

  /*Step 14. this will give us a promise. It gives us a response. It has a data property called res.data. Make a query of 10 todos - ?_limit=10
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
  }*/

  // id is passed here as a parameter from TodoItem.js line 22
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }

  /*Delete Todo - filter method is a high order array method that loops through and based on a condition returns another array. We want to return todos that don't
  match the id that is passed in because that one will be deleted. Also google ... which is the spread operator. Can't just change the array, make a copy of it*/
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Step 15. when a todo is first added, its completed is false | short for title: title, since the key = value passed in.
  // uuid generates random ids for us
  addTodo = (title) => {
    const newTodo = {
      id: Math.floor((Math.random() * 100) + 1),
      title,
      completed: false
    }
    // copy what we have in the array currently and add in the new todo item the user just typed
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return ( 
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/* this is JSX but looks like html. In JSX you can't use class. You use className */}
                {/* Todos.js is imported/embedded into the main app component and todos is passed to Todos as a property */}
                <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

/*the single route of index of home will load both components */

//import React from 'react'; then down we would have extends React.Component
/*function App() {
  return (            //this is JSX but looks like html. In JSX you can't use class. You use className
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/