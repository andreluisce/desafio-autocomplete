import React, { Component } from 'react'
import Prescription from '../components/prescription'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Prescription className='col-xs-12' />
        </div>
      </div >
    )
  }
}

export default App
