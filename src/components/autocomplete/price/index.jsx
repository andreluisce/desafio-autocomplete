import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './price.scss'
import { PriceFormat } from '../../../resources/helpers.js'

@CSSModules(styles)
class Price extends Component {
  render () {
    if (this.props.precoMax === this.props.precoMin) {
      return (
        <div className='col-md-2' styleName='price'>
          {PriceFormat(this.props.precoMax)}
        </div>
      )
    }
    return (
      <div className='col-md-2' styleName='price'>
        <div styleName='priceFrom'>
          {`de ${PriceFormat(this.props.precoMin)}`}
        </div>
        <div styleName='priceTo'>
          {`até ${PriceFormat(this.props.precoMax)}`}
        </div>
      </div>
    )
  }
}

export default Price
