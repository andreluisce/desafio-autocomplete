import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './footer.scss'
import Icon from '../../crossComponents/icon'

@CSSModules(styles)
class Footer extends Component {
  render () {
    return (
      <footer className='row row-no-padding' styleName='footer'>
        <Icon iconAjusting='iconAjusting' iconType='iconSearch' />
        <input className='col-md-7' placeholder='Adicionar Texto Livre' />
        <div className='col-md-2 col-md-offset-2' styleName='copyright'>
          Powered by <b>Memed</b>
        </div>
      </footer>
    )
  }
}

export default Footer
