import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import SideMenuWithNavbarLayout from './components/layouts/SideMenuWithNavbarLayout'
import SimpleSideMenu from './components/menu/SimpleSideMenu'
import Ionicon from './components/common/Ionicon'
import IconiconAlbums from './generated/IoniconAlbums'
import IoniconMdWater from './generated/IoniconMdWater'

class App extends Component {
  render() {
    return (
      <SideMenuWithNavbarLayout sideMenu={SimpleSideMenu}>
       <IoniconMdWater />
      </SideMenuWithNavbarLayout>
    )
  }
}

export default App
