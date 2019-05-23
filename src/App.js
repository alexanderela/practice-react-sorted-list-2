import React, { Component } from 'react';
import './App.css';
import NewTaskForm from './NewTaskForm.js';
import TaskContainer from './TaskContainer.js';
const uuid = require('uuid4');

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addNewTask = (task) => {
    const newTask = {...task, id: uuid()}
    const tasks = [...this.state.tasks, newTask]
    this.setState({ tasks })
  }

  removeTask = () => {

  }


  render() {
    return (
      <div className='App'>
        <h1>Welcome to the Task Manager!</h1>
        <NewTaskForm addNewTask={this.addNewTask} />
        <TaskContainer 
          tasks={this.state.tasks}
          removeTask={this.removeTask}/>
      </div>
    )
  }
}



export default App;
