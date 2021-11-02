// https://projecteuler.net/problem=10
// Summation of primes
// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const PrimesMain = require('./Primes/PrimesMain')

// import PrimesComponent from './PrimesComponent.js'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={PrimesMain}>
      <IndexRoute component={PrimesMain} />
      {/* <Route path='/primes' component={PrimesMain} /> */}
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

// function printPrime(value) {
//     var primes = [];
//     for(var i = 2; i < value; i++) {
//         primes[i] = true;
//     }
//     var limit = Math.sqrt(value);
//     for(var i = 2; i < limit; i++) {
//         if(primes[i] === true) {
//             for(var j = i * i; j < value; j += i) {
//                 primes[j] = false;
//             }
//         }
//     }
//     for(var i = 2; i < value; i++) {
//         if(primes[i] === true) {
//             console.log(i + " " + primes[i]);
//         }
//     }
// }

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false;
//     return num !== 1;
// }
