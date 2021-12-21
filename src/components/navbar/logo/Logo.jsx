import React from 'react'
import logo from '../../../img/logo.svg'
import sLogo from './sLogo.module.css'

export default function Logo() {
	return (
		<div className={sLogo.body}>
			<img src={logo} className={sLogo.img} alt="logo" />
			<p className={sLogo.text}>To-Do</p>
		</div>
	)
}
