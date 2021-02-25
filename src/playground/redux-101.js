import { createStore } from 'redux'


// Actions generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCountTo = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
            }
        default: 
            return state
    }
}

// Store

const store = createStore(countReducer)

console.log((store.getState()))

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// Actions dispatch
store.dispatch(incrementCount({ incrementBy: 5}))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10}))
store.dispatch(setCountTo({ count: 101 }))

