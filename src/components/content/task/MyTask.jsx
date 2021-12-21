import React, { useContext } from 'react'
import tsk from './myTask.module.css'
import { Context } from '../../../context'

export default function MyTask({ task }) {
	const { deleteTask, createComplitedTask, getEdit } = useContext(Context)
	let clone = {}

	const addComplitedTask = (task) => {
		let complitedTask = {}
		for (let key in task) {
			complitedTask[key] = task[key];
		}
		createComplitedTask(complitedTask)
	}

	const cloneTask = (task) => {
		for (let key in task) {
			clone[key] = task[key];
		}
		return clone
	}

	return (

		<div className={tsk.body} >

			<span
				className={tsk.checkbox}
				onClick={e => {
					addComplitedTask(task)
					deleteTask(task)
				}}
			/>

			<p className={tsk.text} >{task.title}</p>

			<div className={tsk.btns} >

				<button
					className={tsk.btnEdit}
					onClick={e => {
						cloneTask(task)
						getEdit(clone)
					}}
				/>

				<button
					className={tsk.btnCopy}
				/>

				<button
					className={tsk.btnDelete}
					onClick={() => deleteTask(task)}
				/>

			</div>

		</div>
	)
}