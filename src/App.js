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
    const unsortedTasks = [...this.state.tasks, newTask]
    const tasks = unsortedTasks.sort((a,b) => {
      if(a.title < b.title) {
        return -1
      }
      if(b.title > a.title) {
        return 1
      }
      return 0
    })

    this.setState({ tasks })
  }

  removeTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })
    this.setState({ tasks })
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
