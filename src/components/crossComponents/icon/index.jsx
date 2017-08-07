import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './icon.scss'
import { PropTypes } from 'prop-types'

@CSSModules(styles)
class Icon extends Component {
  render () {
    return (
      <div className={`${this.props.iconAjusting}`
      } styleName={`${this.props.iconType} `} >
      </div >
    )
  }
}

Icon.defaultProps = {
  iconType: '',
  iconAjusting: '',
  isPositionAbsolute: false,
  topOffset: 0
}

Icon.propTypes = {
  iconType: PropTypes.string,
  iconAjusting: PropTypes.string,
  isPositionAbsolute: PropTypes.bool,
  topOffset: PropTypes.number
}

export default Icon
