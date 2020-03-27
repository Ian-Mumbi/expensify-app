import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from './actions/auth'
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

const store = configureStore()
const jsx = (
    // Define the store that you want to provide to all of the components
    <Provider store={store}>
      <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()

      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
