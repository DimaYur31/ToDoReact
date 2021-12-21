import React from 'react'
import iconUser from '../../../img/image1.png'
import vector from '../../../img/Vector.png'

import S from '.././navbar.module.css';
import sUser from './sUser.module.css';


export default function User() {
	return (
		<div className={S.user}  >
			<h3 className={sUser.header}>Leanne Graham</h3>

			<img src={iconUser} className={sUser.img} alt='user' />

			<span className={sUser.span}>
				<img src={vector} className={sUser.spanImg} alt='arrow' />
			</span>
		</div>
	)
}
