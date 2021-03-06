import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTextareaValue, setLoadingOn } from '../../../actions/action.js'

import Icon from '../../crossComponents/icon'
import Autocomplete from '../../autocomplete'

import styles from './textarea.scss'

@CSSModules(styles)
class TextArea extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      linePosition: 18
    }
  }

  changePosition (el) {
    let start = el.selectionEnd
    let pos = el.value.substr(0, start).split('\n').length

    if (pos > 1) {
      if (el.clientHeight >= el.scrollHeight) {
        this.setState({ ...this.state, linePosition: (pos * 25) - (5 + el.scrollTop) })
      } else {
        // this.setState({ ...this.state, linePosition: (pos * 25) - (25 + el.scrollTop) })
      }
    } else {
      this.setState({ ...this.state, linePosition: 18 })
    }
  }

  handleKeyDown (event) {
    if ((event.keyCode === 8 && this.textInput.value.split('\n').slice(-1)[0].length <= 0) || event.keyCode === 13) {
      event.preventDefault()
    }
  }

  handleChange (event) {
    this.changePosition(event.target)
    this.props.changeTextareaValue(event.target.value)
    this.props.setLoadingOn()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.listPrescrition.length !== this.props.listPrescrition.length) {
      setTimeout(() => {
        this.changePosition(this.textInput)
      }, 10)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.listPrescrition.length > this.props.listPrescrition.length) {
      this.props.changeTextareaValue(
        nextProps.listPrescrition.map(p => {
          return `${p.nome} ${p.fabricante}`
        }).join('\n') + '\n')
    }
  }

  render () {
    return (
      <div styleName='container'>
        <textarea
          style={{ backgroundPositionY: this.state.linePosition + 'px' }}
          ref={(input) => { this.textInput = input }}
          className={`${styles.textbox} ${styles.search}`}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.props.textareaValue}
        >
        </textarea>
        <Autocomplete position={this.state.linePosition} className='col-xs-12' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listPrescrition: state.prescriptionList,
    textareaValue: state.searchMedicine.searchValue
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeTextareaValue, setLoadingOn }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TextArea)
