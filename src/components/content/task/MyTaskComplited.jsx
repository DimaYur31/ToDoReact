import React, { useContext } from 'react'
import tsk from './myTaskComplited.module.css'
import { Context } from '../../../context'

export default function MyTaskComplited({ complitedTask }) {
	const { deleteComplitedTask, returnTask } = useContext(Context);

	const addTask = (complitedTask) => {
		let task = {}
		for (let key in complitedTask) {
			task[key] = complitedTask[key];
		}
		returnTask(task)
	}

	return (

		<div className={tsk.body} >

			<span
				className={tsk.checkbox}
				onClick={e => {
					addTask(complitedTask)
					deleteComplitedTask(complitedTask)
				}}
			/>

			<p className={tsk.checked}>{complitedTask.title}</p>

			<div className={tsk.btns}>
				<button
					className={tsk.btnDelete}
					onClick={() => deleteComplitedTask(complitedTask)}
				/>
			</div>

		</div>
	)
}