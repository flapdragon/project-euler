import React from 'react'
import { Link } from 'react-router'

import PrimesComponent from './PrimesComponent.js'

class PrimesMain extends React.Component {
  render () {
    return (
      <div>
        <PrimesComponent num='10' color='rebeccapurple' />
        <PrimesComponent num='2000000' color='rebeccapurple' />
      </div>
    )
  }
}

module.exports = PrimesMain
