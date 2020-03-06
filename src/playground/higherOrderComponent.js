// Higher Order Component (HOC) -> A component (HOC) that renders other component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// Create the function that returns the hoc
const warningAdminMessage = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please do not share.</p> }
          <WrappedComponent {...props}/>
        </div>
    )
}

// another function that returns a HOC
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
          { props.isAuthenticated ? (
              <WrappedComponent {...props}/>
              ) : (
                  <p>Please login to view the information</p>
          )}
        </div>
    )
}

const AdminInfo = warningAdminMessage(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the damn details." />, document.getElementById('app'))