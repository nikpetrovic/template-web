import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import SideMenuWithNavbarLayout from './components/layouts/SideMenuWithNavbarLayout'
import SimpleSideMenu from './components/menu/SimpleSideMenu'
class App extends Component {
	render() {
		return <SideMenuWithNavbarLayout sideMenu={SimpleSideMenu} />
	}
}

export default App
