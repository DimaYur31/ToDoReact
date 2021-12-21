import React from 'react'
import s from './total.module.css'

export default function Total(props) {
	return (
		<span className={s.body}>
			Total: {props.value}
		</span>
	)
}
