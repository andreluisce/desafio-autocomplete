import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import MedicineItem from '../medicineItem'
import { setLoadingOff } from '../../../actions/action.js'

import itemList from '../../../resources/database.js'
import { ToSeo } from '../../../resources/helpers.js'
import styles from './medicineList.scss'

@CSSModules(styles)
class MedicineList extends Component {
  render () {
    let filterList = []

    if (this.props.medicineName.length <= 0) {
      filterList = itemList
    } else {
      filterList = itemList.filter((item) =>
        item.nome.toLowerCase().includes(this.props.medicineName.toLowerCase()))
    }

    setTimeout(() => {
      this.props.setLoadingOff()
    }, 1000)
    return (
      <ul styleName='item'>
        {
          filterList.map(item =>
            <MedicineItem {...{ ...item }} />
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    medicineName: state.searchMedicine.searchValue
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setLoadingOff }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MedicineList)
