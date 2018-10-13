import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Albums} from '../../assets/svg/ios-add.svg'

class Ionicon extends React.Component {
  state = {}

  render() {
    const {icon} = this.state
    console.log(this.state.icon)
    if (icon) {
      const Icon = icon
      // return <Icon />
    }

    return <img src={icon} />
    // return <span><Albums /></span>
  }

  componentDidMount() {
    const icon = require('../../assets/svg/ios-add.svg')
    this.setState({ icon: icon })
  }
}

export default Ionicon
