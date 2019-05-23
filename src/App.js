import React, { Component } from 'react';
import './App.css';
import NewTaskForm from './NewTaskForm.js';
import TaskContainer from './TaskContainer.js';
const uuid = require('uuidv4'); = {...task, id: uuid()}

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addNewTask = (task) => {
    const newTask = {...task, id: uuid()}
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
