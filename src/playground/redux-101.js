import { createStore } from 'redux'

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({ type: 'DECREMENT', decrementBy })

const resetCount = () => ({ type: 'RESET' })

const setCount = ({ count } = {}) => ({ type: 'SET', count })


// Reducers
const countReducer = (state = { count : 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT': 
        return { count: state.count + action.incrementBy }
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
        case 'RESET':
            return { count: 0 }
        case 'SET': 
        return { count: action.count }
        default:
            return state
    }
}

const store = createStore(countReducer)
 
store.subscribe(() => console.log(store.getState()))

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))


// Action Generators
// const incrementCount = ({ incrementBy = 1 } = {}) => ({ type: 'INCREMENT', incrementBy })

// const decrementCount = ({ decrementBy = 1 } = {}) => ({ type: 'DECREMENT', decrementBy })

// const reset = () => ({ type: 'RESET' })

// const setCount = ({ count = 0 } = {}) => ({ type: 'SET', count })


// // Reducers
// const counterReducer = (state = { count: 0 }, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - action.decrementBy
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         default:
//             return state
//     }
// }


// const store = createStore(counterReducer)

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// })

// // store.dispatch({
// //   type: 'INCREMENT',
// //   incrementBy: 5
// // });

// store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch(incrementCount());

// // unsubscribe();

// store.dispatch(reset({ reset: 2 }));

// store.dispatch(decrementCount({ decrementBy: 2 }))

// store.dispatch(setCount({ count: 1 }))





