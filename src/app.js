import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()
const jsx = (
    // Define the store that you want to provide to all of the components
    <Provider store={store}>
      <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))