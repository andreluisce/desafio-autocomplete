import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import MedicineList from './medicineList'
import Header from './header'
import Footer from './footer'

import styles from './autocomplete.scss'

@CSSModules(styles)
class Autocomplete extends Component {
  render () {
    return (
      <div styleName='autocomplete'>
        <Header />
        <MedicineList />
        <Footer />
      </div>

    )
  }
}

export default Autocomplete
