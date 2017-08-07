import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Header from './header'
import TextArea from './textarea'
import styles from './prescription.scss'

@CSSModules(styles)
class Prescription extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <Header />
        <TextArea />
      </div>
    )
  }
}

export default Prescription
