import React, { Component } from 'react';
import './App.css';
import NewTaskForm from './NewTaskForm.js';
import TaskContainer from './TaskContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addNewTask = (task) => {
    
  }



  render() {
    return (
      <div className='App'>
        <h1>Welcome to the Task Manager!</h1>
        <NewTaskForm addNewTask={this.addNewTask} />
        
      </div>
    )
  }
}



export default App;
