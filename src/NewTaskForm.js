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
		const { title, description } = this.state

		const trimmedTitle = title.trim()
		const trimmedDescription = description.trim()

		if(trimmedTitle.length && trimmedDescription.length) {
			this.setState({ error: '' })
			this.props.addNewTask(this.state)
		} else {
			this.setState({ error: 'Please enter a title and description with at least 1 character'})
		}
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
				<div className='error-container'>
					<h3>{error.length ? error : ''}</h3>
				</div>
			</form>
		)
	}
}

export default NewTaskForm;