import React from 'react'
import inp from './myInput.module.css'

export default function MyInput(props) {
	return (
		<input {...props}
			className={inp.input}
		/>
	)
}
