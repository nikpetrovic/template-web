import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import './SideMenu.scss'

const SideMenu = props => {
  const { items } = props
  return (
    <div className="side-menu">
      {_.map(items, item => (
        <div key={item.key} id={item.key} className="side-menu-item" onClick={item.onClick}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

SideMenu.propTypes = {}

export default SideMenu
