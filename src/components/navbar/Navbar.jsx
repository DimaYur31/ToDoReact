import React from 'react';
import Logo from './logo/Logo';
import User from './user/User';
import S from './navbar.module.css';

export default function Navbar() {
	return (
		<div className="Navbar">
			<header className={S.header}>
				<Logo className={S.logo} />

				<h2 className={S.header}>Tasks</h2>

				<User className={S.user} />
			</header>
		</div>
	)
}