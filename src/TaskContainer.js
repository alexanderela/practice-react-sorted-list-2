import React from 'react';
import './TaskContainer.css';

const TaskContainer = ({ tasks, removeTask }) => {
	const taskList = tasks.map(task => {
		const { title, description, id } = task

		return <li key={id}>
						<div>
							<h2>{title}</h2>
							<h3>{description}</h3>
							<button 
								onClick={() => removeTask(id)}
							>X
							</button>
						</div>
					 </li>

	})

	return <ol>
					{taskList}
				 </ol>
}

export default TaskContainer;