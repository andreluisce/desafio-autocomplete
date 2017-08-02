import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        App Running...
      </div >
    )
  }
}

// REDUX Methods
const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(App)
