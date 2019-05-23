import React, { Component } from 'react';
import './NewTaskForm.css';

class NewTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
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

		return(
			<form 
				className='NewTaskForm'
				onSubmit={this.handleSubmit}
			>
				<input 
					placeholder='New Task Title'
					name='title'
					value={this.state.title}
					onChange={this.handleInputChange}
				/>
				<input
					placeholder='New Task Description'
					name='description'
					value={this.state.description}
					onChange={this.handleInputChange}
				/>
				<button >Add Task</button>
			</form>
		)
	}
}

export default NewTaskForm;