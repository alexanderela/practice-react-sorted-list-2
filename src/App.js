import React, { Component } from 'react';
import './App.css';
import NewTaskForm from './NewTaskForm.js';
import TaskContainer from './TaskContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Deez Nuts</h1>
      </div>
    )
  }
}



export default App;
