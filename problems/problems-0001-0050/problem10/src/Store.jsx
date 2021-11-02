const redux = require('redux')
const reactRedux = require('react-redux')

const SET_MAX_PRIME = 'setMaxPrime'
const initialState = {
  maxPrime: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAX_PRIME:
      return reduceMaxPrime(state, action)
    default:
      return state
  }
}

const reduceMaxPrime = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {maxPrime: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    maxPrime: state.maxPrime
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setMaxPrime: (maxPrime) => {
      dispatch({type: SET_MAX_PRIME, value: maxPrime})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
