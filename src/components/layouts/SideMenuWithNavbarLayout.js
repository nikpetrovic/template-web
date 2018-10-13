import React from 'react'
import ReactDOM from 'react-dom'
import types from 'prop-types'
import './SideMenuWithNavbarLayout.scss'

class SideMenuWithNavbarLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showSideMenu: props.defaultMenuVisible }
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.initialized) {
      this.recalculateSideMenuWidth()
    }
  }

  onSideMenuToggle = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu })
  }

  getComponent = (component, props) => {
    if (!component) {
      return null
    }

    const Component = component
    return <Component {...props} />
  }

  render() {
    const { sideMenu, navbar, children } = this.props
    const { initialized } = this.state

    return (
      <div className="side-menu-with-navbar-layout">
        <div className="navbar">
          {this.getComponent(navbar, { toggleSideMenu: this.onSideMenuToggle })}
        </div>
        <div
          className={`side-menu-left${initialized ? ' animated' : ''}`}
          ref={ref => (this.sideMenu = ref)}
        >
          {this.getComponent(sideMenu)}
        </div>
        <div className="main-container">
          <div className="scrollable-content">{children}</div>
        </div>
      </div>
    )
  }

  recalculateSideMenuWidth = () => {
    if (!this.sideMenu) {
      return
    }

    const { showSideMenu } = this.state
    const sideMenu = ReactDOM.findDOMNode(this.sideMenu)

    const sideMenuStyle = window.getComputedStyle(sideMenu)
      ? window.getComputedStyle(sideMenu)
      : sideMenu.style

    const sideMenuWidth = window.parseFloat(sideMenuStyle.width)

    if (showSideMenu) {
      this.sideMenu.style.marginLeft = -sideMenuWidth + 'px'
      this.sideMenu.style.marginLeft = 'unset'
    } else {
      this.sideMenu.style.marginLeft = 'unset'
      this.sideMenu.style.marginLeft = -sideMenuWidth + 'px'
    }
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (prevState.showSideMenu !== this.state.showSideMenu) {
      this.recalculateSideMenuWidth()
    }

    if (!this.state.initialized) {
      this.setState({ initialized: true })
    }
  }
}

SideMenuWithNavbarLayout.propTypes = {
  defaultMenuVisible: types.bool,
}

SideMenuWithNavbarLayout.defaultProps = {
  defaultMenuVisible: true,
}

export default SideMenuWithNavbarLayout
