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
      <div style={{ top: this.props.position + 50, padding: '0px' }} className='col-xs-12' styleName='autocomplete' >
        <Header />
        <MedicineList />
        <Footer />
      </div>

    )
  }
}

export default Autocomplete
