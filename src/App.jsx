import React, { useState } from 'react'
import './app.css'
import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/sidebar/SideBar';

function App() {
	return (
		<div className="App">
			<Navbar className="Navbar" />
			<SideBar className="Sidebar" />
			<Content className="Navbar" />
		</div >
	);
}

export default App;
