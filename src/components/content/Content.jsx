import React, { useState } from 'react'
import TaskSort from './taskSort/TaskSort'
import Total from './total/Total'
import { Context } from '../../context'
import MyInput from './myInput/MyInput'
import MyButton from './myButton/MyButton'
import tskFrm from './taskForm.module.css'

export default function Content() {
	const [tasks, setTasks] = useState([])// список дел
	const [complitedTasks, setComplitedTasks] = useState([])// список выполненных дел
	const [title, setTitle] = useState('')// value inpyta
	const [textBtn, settextBtn] = useState('Add')// текст в кнопке вормы
	const [clone, setClone] = useState() // для редактирования таска

	// приходит новый таск, проверяет его валидность и создает массив дел
	const createTask = (newTask) => {
		if (newTask.title[0] !== ' ' && newTask.title !== '') {
			setTasks([newTask, ...tasks])
		}
		newTask.title = newTask.title.replace(/\ /, '');
	}

	// возврат из выполнено в невыполнено
	const returnTask = (task) => {
		setTasks([...tasks, task])
	}

	// удаление невыполненных тасков
	const deleteTask = (task) => {
		setTasks(tasks.filter(p => p.id !== task.id))
	}

	// создание выполненных тасков
	const createComplitedTask = (complitedTask) => {
		setComplitedTasks([complitedTask, ...complitedTasks])
	}

	// удаление выполненных тасков
	const deleteComplitedTask = (complitedTask) => {
		setComplitedTasks(complitedTasks.filter(p => p.id !== complitedTask.id))
	}

	//колбэк для кнопки редактирования
	function getEdit(task) {
		setTitle(task.title)
		settextBtn('Save')
		setClone(task)
	}

	// вункция редактирования
	function saveTask(obj) {
		obj.title = title
		console.log(obj);
		tasks.forEach(task => {
			if (task.id == obj.id) {
				let key = tasks.indexOf(task);
				tasks.splice(key, 1, obj)
			}
			return tasks
		})
		setTitle('')
		settextBtn('Add')
	}

	// событие на кнопке (сброс дефолтного поведения) и вызов функции редактирования
	function saveTaskEvent(e) {
		e = e.preventDefault();
		saveTask(clone)
	}

	// создает новый таск
	const addNewTask = (e) => {
		e.preventDefault()
		const newTask = {
			title,
			id: Date.now(),
			done: false
		}
		createTask(newTask)
		setTitle('')
	}

	return (
		<Context.Provider value={{
			deleteTask, deleteComplitedTask, createComplitedTask, getEdit, returnTask
		}}>
			<div className='Content' >

				<form className={tskFrm.form}>
					<MyInput
						value={title}
						onChange={e => setTitle(e.target.value)}
						type="text"
						placeholder="+ Add a task, press Enter to save"
					/>

					<MyButton onClick={
						textBtn === 'Add'
							? addNewTask
							: saveTaskEvent
					}>
						{textBtn}
					</MyButton>
				</form>

				<Total value={tasks.length + complitedTasks.length} />

				<TaskSort
					tasks={tasks}
					complitedTasks={complitedTasks}
				/>

			</div>
		</Context.Provider>
	)
}
