import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTextareaValue, setLoadingOn } from '../../../actions/action.js'

import styles from './textarea.scss'

@CSSModules(styles)
class TextArea extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.props.changeTextareaValue(event)
    this.props.setLoadingOn()
  }

  render () {
    return (
      <div>
        <textarea styleName='textbox' onChange={this.handleChange} ></textarea>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeTextareaValue, setLoadingOn }, dispatch)

export default connect(null, mapDispatchToProps)(TextArea)
