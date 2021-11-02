// const React = require('react')
import React from 'react'
// import { connector } from '../Store'

const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return num !== 1
}

const sumPrimes = (value) => {
  let primes = []
  let sum = 0
  for (let i = 2; i <= value; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  console.log(primes)

  primes.map(prime => {
    return sum+= prime
  })

  console.log("primes", primes)
  console.log("sum", sum)

  return sum
}

class PrimesComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      maxPrime: 0
    }

    this.handleMaxPrimeEvent = this.handleMaxPrimeEvent.bind(this)
  }
  handleMaxPrimeEvent (event) {
    let value = parseInt(event.target.value)
    console.log(typeof value)
    if (Number.isInteger(value)) {
      this.setState({ maxPrime: value })
    }
    else if (value === '') {
      this.setState({ maxPrime: '' })
    }
    else {
      this.setState({ maxPrime: 0 })
    }
  }
  render () {
    const maxPrime = 0
    const style = {color: this.props.color}
    return (
      <div>
        <input
          value={this.state.maxPrime}
          onChange={this.handleMaxPrimeEvent}
        />
        <h1 style={ style }>
          {sumPrimes(this.state.maxPrime)}
        </h1>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

PrimesComponent.propTypes = {
  maxPrime: string,
  setMaxPrime: func
}

module.exports = PrimesComponent
