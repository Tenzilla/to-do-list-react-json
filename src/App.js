import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <h1>To-Do List</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;