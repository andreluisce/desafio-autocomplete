import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import styles from './dotsLoading.scss'

@CSSModules(styles)
class DotsLoading extends Component {
  render () {
    return (
      <div>
        <div styleName='loading'></div>
        <div className={`${styles.spinner} ${this.props.loading ? 'show' : 'hide'}`}></div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return (
    {
      loading: state.fetchingSearch
    })
}

export default connect(mapStateToProps)(DotsLoading)
