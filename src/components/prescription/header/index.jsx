import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './header.scss'

@CSSModules(styles)
class Header extends Component {
  render () {
    return (
      <header styleName='header'>
        <h1 styleName='title'>
          Prescrição
        </h1>
      </header>
    )
  }
}

export default Header
