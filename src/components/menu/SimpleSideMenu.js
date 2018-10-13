import React from 'react'
import PropTypes from 'prop-types'
import SideMenu from './SideMenu'

const onItemClick = e => {
  const id = e.target.id
  console.log('clicked on item:', id)
}
const items = [
  {key: 1, onClick: onItemClick, title: 'Item 1'},
  {key: 2, onClick: onItemClick, title: 'Item 2'},
  {key: 3, onClick: onItemClick, title: 'Item 3'},
  {key: 4, onClick: onItemClick, title: 'Item 4'},
  {key: 5, onClick: onItemClick, title: 'Item 5'},
  {key: 6, onClick: onItemClick, title: 'Item 6'},
  {key: 7, onClick: onItemClick, title: 'Item 7'},
]

const SimpleSideMenu = props => {
  return <SideMenu items={items} />
}

SimpleSideMenu.propTypes = {}

export default SimpleSideMenu
