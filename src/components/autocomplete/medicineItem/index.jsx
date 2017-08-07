import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import Price from './price'
import styles from './medicineItem.scss'

@CSSModules(styles)
class MedicineItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseOver: false
    }
  }

  mouseEnter () {
    this.setState({
      mouseOver: true
    })
  }

  mouseLeave () {
    this.setState({
      mouseOver: false
    })
  }
  render () {
    if (this.props.empty) {
      return (
        <div className='row' styleName='item'>
          <div className='col-xs-12 text-center' styleName='empty'>
            Não há itens para esta busca
          </div>
        </div>
      )
    }

    return (
      <div
        className={`row ${this.state.mouseOver ? styles.selected : ''}`}
        styleName='item'
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
      >
        <figure className='col-xs-1' styleName='image' >
          <img {... { src: `${this.props.thumbUrl}` } } />
        </figure>
        <div className='col-xs-7' styleName='nome'>
          {this.props.nome}
          <div styleName='principioAtivo'>
            {this.props.principioAtivo}
          </div>
        </div>
        <div className='col-xs-2' styleName='fabricante'>
          {this.props.fabricante}
          <div styleName='titularidade'>{this.props.titularidade}</div>
        </div>
        <div className={`col-xs-2 ${this.state.mouseOver ? 'hide' : 'show'}`}>
          <Price {...{ precoMax: this.props.precoMax, precoMin: this.props.precoMin }} />
        </div>
        <div className={`col-xs-2 ${styles.titularidadeBox} ${this.state.mouseOver ? '_show' : 'hide'}`}>
          <div>{this.props.titularidade}</div>
        </div>

      </div >
    )
  }
}

export default MedicineItem
