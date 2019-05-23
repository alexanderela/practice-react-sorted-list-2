import React, { Component } from 'react';
import './NewTaskForm.css';

class NewTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			error: ''
		}
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addNewTask(this.state)
	}

	render() {
		const { title, description, error } = this.state;

		return(
			<form 
				className='NewTaskForm'
				onSubmit={this.handleSubmit}
			>
				<input 
					placeholder='New Task Title'
					name='title'
					value={title}
					onChange={this.handleInputChange}
				/>
				<input
					placeholder='New Task Description'
					name='description'
					value={description}
					onChange={this.handleInputChange}
				/>
				<button>Add Task</button>
				<h3>{error}</h3>
			</form>
		)
	}
}

export default NewTaskForm;