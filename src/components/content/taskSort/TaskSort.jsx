import React from 'react'
import TaskList from '../taskList/TaskList'
import TaskListTrue from '../taskList/TaskListTrue'
import s from './taskSort.module.css'

export default function TaskSort({ tasks, complitedTasks }) {
	return (
		<div className={s.wrapper}>

			<div className={s.list} >
				<span className={s.toDo} >To-Do {tasks.length}</span>
				<TaskList
					tasks={tasks}
					key={tasks.id}
				/>
			</div>

			<div className={s.up} >
				<span className={s.complited} >Complited {complitedTasks.length}</span>
				<TaskListTrue
					complitedTasks={complitedTasks}
					key={tasks.id}
				/>
			</div>
		</div>
	)
}
