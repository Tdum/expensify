// High order component (HOC) - a component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReacDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Hello</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning  = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please don't share.</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props}/> 
                ) : (
                <p>You need to log</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)



ReacDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'))