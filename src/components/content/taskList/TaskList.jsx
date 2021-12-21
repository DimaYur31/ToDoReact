import React from 'react'
import MyTask from '../task/MyTask'
import task from './taskList.module.css'

export default function TaskList({ tasks }) {

	return (
		<div className={task.taskList}>
			{
				tasks.map((task) =>
					<MyTask
						task={task}
						key={task.id}
					/>
				)
			}
		</div>

	);
};
