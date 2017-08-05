import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './header.scss'

import DotsLoading from '../dotsLoading'

@CSSModules(styles)
class Header extends Component {
  render () {
    return (
      <header>
        <nav>
          <ul>
            <li styleName='selected'>Industrializados</li>
            <li>Manipulados</li>
            <li>Composições</li>
            <li>Exames</li>
          </ul>
        </nav>
        <DotsLoading/>
      </header>
    )
  }
}

export default Header
