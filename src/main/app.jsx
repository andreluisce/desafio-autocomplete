import React, { Component } from 'react'
import Autocomplete from '../components/autocomplete'
import Prescription from '../components/prescription'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <Prescription />
            <Autocomplete />
          </div>
        </div>
      </div >
    )
  }
}

export default App
