import React from 'react'
import btn from './muButton.module.css'
export default function MyButton({ children, ...props }) {
	return (
		<button {...props} className={btn.button}>
			{children}
		</button>
	)
}
