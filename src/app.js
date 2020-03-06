import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters' 
import getVisibleExpenses from './selectors/expenses'
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const jsx = (
    // Define the store that you want to provide to all of the components
    <Provider store={store}>
      <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))