import React from 'react'
import menu from '../../img/Vector.svg'
import s from './sideBar.module.css'

export default function sideBar() {
	return (
		<div className={s.sideBar} >
			<div className={s.body} >
				<img className={s.menu} src={menu} alt="menu" />
			</div>
		</div>
	)
}
