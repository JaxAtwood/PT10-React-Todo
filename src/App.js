import React from 'react';
import "./components/TodoComponents/Todo.css";
import { tasks } from "./components/TodoComponents/data";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }
 
  toggleItem = itemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
        return item;
        }
      })
    });
  };

  addItem = tasks => {
    const newItem = {
      tasks: tasks,
      completed: false,
      id: Date.now()
    };

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearSelected = () => {
    this.setState({
      tasks: 
      this.state.tasks.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="Box">
        <h1>Web Dev Topics to Study</h1>
        <TodoForm 
          addItem={this.addItem} 
          clearSelected={this.clearSelected}
        />
        <TodoList 
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
