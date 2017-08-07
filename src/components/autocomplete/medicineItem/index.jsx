import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Price from './price'
import styles from './medicineItem.scss'

@CSSModules(styles)
class MedicineItem extends Component {
  render () {
    return (
      <div className='row' styleName='item'>
        <figure className='col-md-1' styleName='image' >
          <img {... { src: `${this.props.thumbUrl}` } } />
        </figure>
        <div className='col-md-7' styleName='nome'>
          {this.props.nome}
          <div styleName='principioAtivo'>
            {this.props.principioAtivo}
          </div>
        </div>
        <div className='col-md-2' styleName='fabricante'>
          {this.props.fabricante}
          <div styleName='titularidade'>{this.props.titularidade}</div>
        </div>
        <Price {...{ precoMax: this.props.precoMax, precoMin: this.props.precoMin }} />
      </div>
    )
  }
}

export default MedicineItem
