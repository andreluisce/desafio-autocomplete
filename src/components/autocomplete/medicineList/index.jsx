import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import MedicineItem from '../medicineItem'
import { setLoadingOff, addMedicine } from '../../../actions/action.js'

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
      this.props.dispatch(setLoadingOff())
    }, 500)
    return (
      <ul styleName='item'>
        {
          filterList.map(item =>
            <li {...{
              onClick: () => {
                this.props.dispatch(addMedicine(item))
              },
              key: item.id
            }}>
              <MedicineItem {...{ ...item }} />
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    medicineName: state.searchMedicine.searchValue.split('\n').slice(-1)[0]
  }
}

export default connect(mapStateToProps)(MedicineList)
