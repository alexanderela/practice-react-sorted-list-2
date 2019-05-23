import React from 'react';
import './TaskContainer.css';

const TaskContainer = ({ tasks, removeTask }) => {
	const taskList = tasks.map(task => {
		const { title, description } = task

		return <li key={task.id}>
						<div>
							<h2>{title}</h2>
							<h3>{description}</h3>
						</div>
					 </li>

	})

	return <ol>
					{taskList}
				 </ol>
}

export default TaskContainer;