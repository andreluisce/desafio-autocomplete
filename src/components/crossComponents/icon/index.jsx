import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './icon.scss'

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
export default Icon
