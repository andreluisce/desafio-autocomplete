import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './textarea.scss'

@CSSModules(styles)
class TextArea extends Component {
  render () {
    return (
      <div>
        <textarea styleName='textbox'></textarea>

      </div>

    )
  }
}

export default TextArea
