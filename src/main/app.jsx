import React, { Component } from 'react'
import Autocomplete from '../components/autocomplete'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <h2 className='text-center'> Prescrição </h2>
        <div className='row'>
          <div className='col-10'>
            <Autocomplete />
          </div>
        </div>
      </div >
    )
  }
}

export default App
