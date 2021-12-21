import React from 'react'
import MyTaskComplited from '../task/MyTaskComplited'
import task from './taskList.module.css'

export default function TaskList({ complitedTasks }) {

	return (
		<div className={task.taskListComplited}>
			{complitedTasks.map(complitedTask =>
				<MyTaskComplited
					complitedTask={complitedTask}
					key={complitedTask.id}
				/>
			)}
		</div>
	);
};
