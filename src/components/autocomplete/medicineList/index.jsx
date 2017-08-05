import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import MedicineItem from '../medicineItem'

import itemList from '../../../resources/database.js'
import styles from './medicineList.scss'

@CSSModules(styles)
class MedicineList extends Component {
  render () {
    return (
      <ul styleName='item'>
        {
          itemList.map(item =>
            <MedicineItem {...{ ...item }} />
          )
        }
      </ul>
    )
  }
}

export default MedicineList
