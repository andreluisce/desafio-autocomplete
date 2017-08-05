import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './dotsLoading.scss'

@CSSModules(styles)
class DotsLoading extends Component {
  render () {
    return (
      <div styleName='loading'></div>
    )
  }
}

export default DotsLoading
