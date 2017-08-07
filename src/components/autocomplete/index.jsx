import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import MedicineList from './medicineList'
import Header from './header'
import Footer from './footer'

import styles from './autocomplete.scss'

@CSSModules(styles)
class Autocomplete extends Component {
  render () {
    return (
      <div style={{ top: this.props.position + 50, padding: '0px' }} className={`col-xs-12 ${this.props.showAutocomplete ? 'show' : 'hide'}`} styleName='autocomplete' >
        <Header />
        <MedicineList />
        <Footer />
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    showAutocomplete: state.searchMedicine.searchValue.split('\n').slice(-1)[0].length > 0
  }
}

export default connect(mapStateToProps)(Autocomplete)
