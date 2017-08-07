import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './footer.scss'
import Icon from '../../crossComponents/icon'

@CSSModules(styles)
class Footer extends Component {
  render () {
    return (
      <footer className='row row-no-padding' styleName='footer'>
        <Icon iconAjusting='iconAjusting' iconType='iconText' />
        <div className='col-xs-7' styleName='info'>Adicionar Texto Livre</div>
        <div className='col-xs-2 col-xs-offset-2' styleName='copyright'>
          Powered by <b>Memed</b>
        </div>
      </footer>
    )
  }
}

export default Footer
