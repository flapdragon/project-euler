const React = require('react')

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

const PrimesComponent = React.createClass({
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }>
          {sumPrimes(this.props.num)}
        </h1>
      </div>
    )
  }
})

module.exports = PrimesComponent
