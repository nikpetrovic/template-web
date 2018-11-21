import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import SideMenuWithNavbarLayout from './components/layouts/SideMenuWithNavbarLayout'
import SimpleSideMenu from './components/menu/SimpleSideMenu'
import LimitOfLiability from './components/LimitOfLiability'

class App extends Component {
	render() {
		return (
			<SideMenuWithNavbarLayout sideMenu={SimpleSideMenu}>
				<LimitOfLiability />
			</SideMenuWithNavbarLayout>
		)
	}
}

export default App
